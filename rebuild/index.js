fetch('https://27tmm5ovwbbhdp3a5niqojvwk40rckhs.lambda-url.us-east-1.on.aws')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        document.getElementById('replaceme').innerText = data.count;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });