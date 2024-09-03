import LoadingText from "./titleText";
import pic from "./Image/pfp.PNG";
import React, { useState } from 'react';

const InfoPage = () => {
    const [times, setTimes] = useState(0);

    const handleOnClick = () => {
        setTimes(prevTimes => prevTimes + 1); // Increment the `times` state
            switch (times) {
                case 10:
                    alert("Surprise(hope it's your birthday)");
                    break;
                case 11:
                    alert("Stop");
                    break;
                case 12:
                    alert("Not funny");
                    break;
                case 13:
                    alert("Something bad will happen");
                    break;
                case 14:
                    alert("Bro thought he could become the next rizz king by doing the uncanny ankha zone dance like a sussy baka in Ohio💀dont bro know Quandale Dingle already did the forgis on the jeep thug shaker banban style with baller💀bro aint ever making it out of Oklahoma the ocky way💀 that shit just plain uncanny like skibidi toilet bro💀 bro got negative infinity morbin chill bill pizza tower barbenheimer rizz bro💀bro got that Nathaniel B ahh griddy bro💀bro really thought he had that rise of gru grimace shake 1 2 buckle my shoe spiderverse whopper rizz bro💀bro got that canon event baby gronk waffle house monday left me broken ahh drip in Ohio bro💀 we aint ever makin it out of Ohio with bros goofy ahh dj khaled mr chedda sisyphus toxic gossip train pikmin 4 ahh rizz bro💀 that aint even elephant mario titanic submarine god tier rizz bro💀thats just uncanny like shadow wizard money gang ambatukam twitter x bro💀fr bro💀 like bro lets go golfing in Ohio kumalala savesta sbidi toiledt");
                    break;
                case 15:
                    if (window.confirm("Congratulations you won, click OK to claim your prize!!!!")) {
                        window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
                    } else {
                        alert("Go find something better to do");
                    }
                    break;
                case 50:
                    alert("Seriously?");
                    break;
                case 100:
                    alert("I see");
                    break;
                case 150:
                    alert("I am glad you enjoy the button so much");
                    break;
                case 200:
                    alert("I mean I built a website, you don't want to have a complete look?");
                    break;
                case 300:
                    alert("That hurts me");
                    break;
                case 400:
                    alert("I think you should take a break");
                    break;
                case 500:
                    alert("Are you okay?");
                    break;
                case 600:
                    alert("This button isn't going anywhere, you know?");
                    break;
                case 700:
                    alert("Maybe try another feature?");
                    break;
                case 800:
                    alert("You're really committed to this, huh?");
                    break;
                case 900:
                    alert("Wow, 900 clicks? That's dedication.");
                    break;
                case 1000:
                    alert("Congratulations, you've reached 1000 clicks! You've earned... nothing! But thanks for the clicks!");
                    break;
                case 4444 :
                    window.location.assign("https://www.youtube.com/watch?v=8etU7L1KnCE&t=14s");
                    break;
                default:
                    if (times > 1000 && times % 100 === 0) {
                        alert(`You've clicked ${times} times. Still going strong?`);
                    }
                    break;
        }
    };
    return (
        <body class="animated-background h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 w-screen">
            <div class="fixed top-0 mx-auto mb-10">
                <LoadingText />
            </div>
            <div class = "grid grid-cols-2 gap-4 ">
            <div>
            </div>
            {times >= 11 && <div class = "mr-60 inline-block row-span-2 col-start-2">
             <img src={pic} align = "right" alt="Description" className="w-1/2 rounded shadow-lg" />
             </div>}
            <div class="w-full font-mono row-start-2">
                <div class=" text-left p-2 m-2 h-58 w-auto shadow-md rounded-xl text-2xl">        
                <p class="font-bold text-xl">Name: Emrys Dai</p>
                <div class="text-left p-2">
                    <p>Degree: Bachelor of CS (Not the Coutner Strike one)</p>
                </div>
                <div class="text-left p-2">
                    <p>Age: Old enough to do anything</p>
                </div>
                <div class="text-left p-2">
                    <p>Difficulties: Asian</p>
                </div>
                <div class="text-left p-2">
                    <p>Personality: biased</p>
                </div>
                <div class="text-left p-2">
                    <p font-mono>That's all I have to say.
                        <br></br>
                        You may now click on the icons on the sidebar to see something else. 
                        <br></br>
                        Or you can click on the red button beneath
                        this textbox that does alsolutly nothing.
                        <br></br>
                        (Something may happen if you click it 10 times)
                    </p>
                </div>
                <div class = "fixed mt-10">
                    <button class="button" onClick={handleOnClick}>Click Me</button>
                    <div className="mt-4 p-4 rounded shadow-lg animated-background bg-gradient-to-r from-green-100 via-green-300 to-green-100">
                            <p className="text-lg font-bold">You have clicked the button <span className="text-red-950 font-bold">{times}</span> times.</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </body>
    );
};

export default InfoPage