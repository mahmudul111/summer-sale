let total = 0.00;
function cardOneClick(target){
    const targetCard = target.childNodes[3].childNodes[3].innerText;
    const addCardItems = document.getElementById('add-items');
    const addLi = document.createElement('li');
    addLi.innerText = targetCard;
    addCardItems.appendChild(addLi);
    const getCardPrice = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    const price = document.getElementById('price');
    total = parseFloat(total) + parseFloat(getCardPrice);
    price.innerText = total.toFixed(2);
    const applyBtn = document.getElementById('apply-btn');
    if(total >= 200){
        applyBtn.removeAttribute('disabled');
    }
        const couponInput = document.getElementById('coupon-input');

        couponInput.addEventListener('keyup', function(){
        const inputText = couponInput.value ;

        if(inputText === 'SELL200'){
            applyBtn.addEventListener('click', function(){
                const discount = 20;
                const discountField = document.getElementById('discount');
                const discountPrice = document.getElementById('discount-price')
                const getDiscount = total * (discount / 100);
                const getDiscountPrice = total - getDiscount;
                discountField.innerText = getDiscount.toFixed(2);
                discountPrice.innerText = getDiscountPrice.toFixed(2);
            })
    
            }else{
                return;
            }
        
        })

        if(total > 0){
            const makePurchaseBtn = document.getElementById('purchase-unable');
            makePurchaseBtn.removeAttribute('disabled');
        }
        
        const goHomeBtn = document.getElementById('go-home');
        goHomeBtn.addEventListener('click', function(){
            window.location.href = 'index.html'
        })

    
    
}