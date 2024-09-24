<script>
    fetch('https://27tmm5ovwbbhdp3a5niqojvwk40rckhs.lambda-url.us-east-1.on.aws')
        .then(response => response.json())
        .then((data) => {
            document.getElementById('replaceme').innerText = data.count
        })
</script>