document.addEventListener("DOMContentLoaded", () => {
    const sounds = ["sound1", "sound2", "sound3"]; // List your audio filenames without extensions
    const buttonsContainer = document.getElementById("buttons");
    let currentAudio = null;

    // Function to stop currently playing audio
    function stopAudio() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset audio to start
        }
    }

    // Create a button for each sound
    sounds.forEach(sound => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = sound;

        button.addEventListener("click", () => {
            stopAudio();
            currentAudio = new Audio(`sounds/${sound}.mp3`);
            currentAudio.play();
        });

        buttonsContainer.appendChild(button);
    });

    // Create a stop button
    const stopButton = document.createElement("button");
    stopButton.classList.add("stop");
    stopButton.innerText = "Stop";
    stopButton.addEventListener("click", stopAudio);
    
    buttonsContainer.appendChild(stopButton);
});
