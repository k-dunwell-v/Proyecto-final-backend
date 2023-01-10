const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

//////////////////////////////////////////////////////

function addToCart(data) {
    
    const { product, userid } = JSON.parse(data)

    fetch('/api/carritos', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.dupe) {

            fetch('/api/carritos/' + userid + '/productos', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                logger.error(error); throw error
            });

        }else{
            console.log('Success:', data);
        }
    })
    .catch((error) => {
        logger.error(error); throw error
    });
}

