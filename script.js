document.addEventListener("DOMContentLoaded", function () {
    const guestButton = document.getElementById("guestButton");
    const content = document.getElementById("content");

    guestButton.addEventListener("click", function () {
        content.innerHTML = `
            <h2>Upload Your Gameplay Video</h2>
            <label for="fileUpload" class="custom-file-upload">Upload Video</label>
<input type="file" id="fileUpload">
            <div id="shareContainer" style="margin-top: 20px; display: none;">
                <button id="generate" class="button">Generate!</button>
            </div>
        `;

        document.getElementById("videoUpload").addEventListener("change", function () {
            document.getElementById("shareContainer").style.display = "block";
        });
    });
});
