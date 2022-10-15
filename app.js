(function(){
    
    const customerImage = document.querySelector('#customer-img')
    const customerName  = document.querySelector('#customer-name')
    const customerText  = document.querySelector('#customer-text')
    
    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []
    function Customer(img,name,text){
         this.img = img
         this.name = name
         this.text = text
    }
    function createCustomer(img,name,text){
        let Img =`./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }
    createCustomer(0,'John','Thank you so much for taking the time to send this! Everyone here at business name loves to know that our customers enjoy what we do. Were glad that you loved product, service, experience, person etc We are always trying our best to make your experience memorable and were glad that weve achieved it!')
    createCustomer(1,'Harry','In our consumer trust webinar, online reviews expert Tom Goodwin gave some great advice. Send SMS survey questions in your customers’ happiest moments. Like, when they come home to a spotless house after paying for a cleaning service.')
    createCustomer(2,'Rumi','Simplicity is key with SMS. When you’re asking for feedback in 160 characters or less, you need to get straight to the point. To help you get started, we’ve created templates for common types of text surveys for you to use.')
    createCustomer(3,'Lisa','58% of customers will stop using a service if they have one bad experience. Putting together SMS-driven If yours is a service-based business, creating an SMS-driven satisfaction survey will help you continually improve the customer experience. It gives you the chance to listen to the voice of the customer, and respond.')
    createCustomer(4,'Wook','In eCommerce, the delivery experience is all part of the service and it pays to know what your customers think. In this example, weve created a workflow path for customers who rate you at 5 out of 10 or less so you can better understand what went wrong.')


    btn.forEach(function(button){
      button.addEventListener('click', function(e){
        if(e.target.parentElement.classList.contains('prevBtn')){
           if(index === 0){
            index=customers.length
           }
           index--
           customerImage.src =customers[index].img
           customerName.textContent=customers[index].name
           customerText.textContent=customers[index].text
        }
        if(e.target.parentElement.classList.contains('nextBtn')){
            index++
           if(index === customers.length){
            index=0
           }
        
           customerImage.src =customers[index].img
           customerName.textContent=customers[index].name
           customerText.textContent=customers[index].text
        }
      })
    })
})()