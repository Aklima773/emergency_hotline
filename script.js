//clicking heart icon increase-decrease start

document.addEventListener('DOMContentLoaded', ()=>{
    // get all wish icon 

    const wishIcons = document.querySelectorAll('.wish-icon');

    // get wish count btn 

    const wishCount = document.getElementById('wish-count');


    let count = 0;

    wishIcons.forEach(icon=>{

        icon.addEventListener('click', ()=>{
            const isWished = icon.classList.contains('fa-solid');

            if(isWished){
                //already clicked now remove

                icon.classList.remove('fa-solid', 'text-red-500');
                icon.classList.add('fa-regular');
                count--;
            }else{
                // make it red 

                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid', 'text-red-500');
                count++;
            }

            wishCount.textContent = count;
        })

    })
})


//clicking heart icon increase-decrease end

//call button functionalities

document.addEventListener('DOMContentLoaded', ()=>{

    // get call button 

    const calBtns = document.querySelectorAll('.call-btn');
    const totalCoinElement = document.getElementById('total-coin');
    const callHistoryContainer = document.getElementById('call-history-container');
    const clearAll = document.getElementById('clear');

    let coinCount = parseInt(totalCoinElement.textContent);


    // realtime of call history 

    function getCurrentTime(){

        const now = new Date();
        return now.toLocaleTimeString('en-US', {hour12: true});
    }
    

    calBtns.forEach(btn=>{

           

        btn.addEventListener('click', ()=>{

           

            const card = btn.closest(".card-container");

            if(coinCount >= 20){

                // deduct coin

                coinCount -=20;

                // update total coin 

                totalCoinElement.textContent = coinCount;

            // get service name and number 
            const serviceName = card.querySelector(".service-description").textContent.trim();

            const contactNumber = card.querySelector(".contact-number").textContent.trim();

            // show alert 
            alert(`Service: ${serviceName}\nNumber: ${contactNumber}`);


            // create new call history after call on any service 

            const newEntry = document.createElement('div');
            newEntry.classList.add('call-history-details', 'flex', 'justify-between', 'items-center', 'mt-[44px]', 'gap-4'); 
            newEntry.innerHTML = `
                  <div  class="callhistory-container">
                            <h1 class="service-title text-[18px] font-[600]">
                               ${serviceName}
                            </h1>

                            <p class="contact-number text-[#5c5c5c] text-[18px] font-[400]">${contactNumber}</p>
                        </div>

                        <div class="right-side-time">
                            <p class="time text-[18px] font-[400]">${getCurrentTime()}</p>
                        </div>`;

            // Append to call history 

            callHistoryContainer.appendChild(newEntry);

           
            }else{
                //show alert if not enough coins

                alert("Sorry, You have not enough coin");
            }
        });
    });

// clear history 

clearAll.addEventListener('click', ()=>{

    const callHistoryDetails = callHistoryContainer.querySelectorAll('.call-history-details');
    callHistoryDetails.forEach(entry=>entry.remove());
});




});


// Copy button Function 



