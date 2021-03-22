axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAHefVFzh4p3toZCGD6QIBG5b7hZAutEx3dWl7MjxPEZBzC2LoLIyK5YMaZAPBgXwUnKRTVfon2mpRDZC1yjDeOYv54hLzkYqRQHlOVNeJxkezxS4t2SMzlESz30F3ZBoTMhq4wLGFOSuPdu3ZAcsnLrMi4ytxo006iMRMTEtYCh')
        .then(response => {
            var output = "";
            output +="<br>BÀI VIẾT SỐ 1<br><br>" + response.data.data[0].message + "<br><br>BÀI VIẾT SỐ 2<br><br>" + response.data.data[1].message + "<br><br>BÀI VIẾT SỐ 3<br><br>" + response.data.data[2].message;
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.error(error))