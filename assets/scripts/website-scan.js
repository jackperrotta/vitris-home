function loadClient() {

    gapi.client.setApiKey("AIzaSyARzOgyIgAwCr7Kwu5UPeNUeEl6bVfn3yw");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/pagespeedonline/v5/rest")
    .then(function() {

        var url = document.getElementById("websiteUrl").elements[0].value;

        let values  = {}
            values.to = 'jperrotta521@gmail.com'
            values.subject = 'Website Analysis'
            values.message = {};
            values.message['URL'] = url;
      
        $.ajax({
            url: "https://mailer.tryvitris.com/sendMail",
            method: "POST",
            data: values,
            dataType: "text",
            success:  (data) => {
            },
            error: (textStatus, errorThrown) => {
            }
        })

        var validation = /(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|trend|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/

        var validUrl;
      
        if (validation.test(url)){
            validUrl = url;
            document.getElementById('analysis-loading').style.display = 'block';
            document.getElementById('websiteUrl').style.display = 'none';
            window.location.hash = '#website-analysis';

        } else if(validation.test("http://" + url)){
            validUrl = "http://" + url;
            document.getElementById('analysis-loading').style.display = 'block';
            document.getElementById('websiteUrl').style.display = 'none';
            window.location.hash = '#website-analysis';

        } else {
            alert("url is not valid.");
            window.location.hash = '#page-top';
        }
      
        return gapi.client.pagespeedonline.pagespeedapi.runpagespeed({
            "url": validUrl,
            "category": [
                "seo",
                "best-practices",
                "performance",
                "pwa"
            ],
            "strategy": "mobile"
        })
    
        .then(function(response) {
            var seo = parseInt(response.result.lighthouseResult.categories.seo.score * 100);
            var performance = parseInt(response.result.lighthouseResult.categories.performance.score * 100); 
            var bestPractices = parseInt(response.result.lighthouseResult.categories["best-practices"].score * 100);
            var pwa = parseInt(response.result.lighthouseResult.categories.pwa.score * 100);

            var total = parseInt((seo * 0.3) + (performance * 0.4) + (bestPractices * 0.05) + (pwa * 0.25));

            var seoColor;
            var performanceColor;
            var bestPracticesColor;
            var pwaColor;
            var totalColor;

            if (seo > 89){
                seoColor = 'green'
            } else if(seo < 50){
                seoColor = 'red'
            } else{
                seoColor = 'orange'
            }

            if (performance > 89){
                performanceColor = 'green'
            } else if(performance < 50){
                performanceColor = 'red'
            } else{
                performanceColor = 'orange'
            }

            if (bestPractices > 89){
                bestPracticesColor = 'green'
            } else if(bestPractices < 50){
                bestPracticesColor = 'red'
            } else{
                bestPracticesColor = 'orange'
            }

            if (pwa > 89){
                pwaColor = 'green'
            } else if(pwa < 50){
                pwaColor = 'red'
            } else{
                pwaColor = 'orange'
            }

            if (total > 89){
                totalColor = 'green'
            } else if(total < 50){
                totalColor = 'red'
            } else{
                totalColor = 'orange'
            }

            document.getElementById("seoScore").innerHTML = seo + "%";
            document.getElementById("seoCircle").classList.add('p' + seo, seoColor);

            document.getElementById("performanceScore").innerHTML = performance + "%";
            document.getElementById("performanceCircle").classList.add('p' + performance, performanceColor);

            document.getElementById("bestPracticesScore").innerHTML = bestPractices + "%";
            document.getElementById("bestPracticesCircle").classList.add('p' + bestPractices, bestPracticesColor);

            document.getElementById("pwaScore").innerHTML = pwa + "%";
            document.getElementById("pwaCircle").classList.add('p' + pwa, pwaColor);

            document.getElementById("totalScore").innerHTML = total + "%";
            document.getElementById("totalCircle").classList.add('p' + total, totalColor);
            
            document.getElementById('done-loading').style.display = 'block';
            document.getElementById('loading-roller').style.display = 'none';

            console.log(total);
            
            
            },
            function(err) { 
                console.error("Execute error", err);
                alert("Something went wrong, refresh the page and try again");
                window.location.reload(false);  
            });
    },
    function(err) { console.error("Error loading GAPI client for API", err); });
  }

  gapi.load("client");

  function sendLead() {
    var name = document.getElementById("analysisLead").elements[0].value;
    var number = document.getElementById("analysisLead").elements[1].value;
    var email = document.getElementById("analysisLead").elements[2].value;

    let values  = {}
      values.to = 'jack@tryvitris.com'
      values.subject = 'Website Analysis Lead'
        values.message = {};
        values.message['Lead'] = [name, number, email];
      
      $.ajax({
        url: "https://mailer.tryvitris.com/sendMail",
        method: "POST",
        data: values,
        dataType: "text",
        success:  (data) => {

        },
        error: (textStatus, errorThrown) => {

        }
      })
  }

  function viewResults(){
    document.getElementById('analysis-results').style.display = 'block';
    document.getElementById('analysis-loading').style.display = 'none';
  }