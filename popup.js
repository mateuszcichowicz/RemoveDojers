document.getElementById('remove-doj').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab) { 
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                func: removeDojers
            });
        } else {
            console.error("No active tab found.");
        }
    });
});

function removeDojers() {
    const divs = document.querySelectorAll(".__fb-dark-mode.x1n2onr6");
    for( let i = 0; i < divs.length; i++)
    {
        const div = divs[i];
        if(div.getAttribute('role')==='row') {
            const spans = div.querySelectorAll('span');
            let remove = false;
            spans.forEach(span => {
            if (span.textContent.includes('fratello wojcieszello')) {
                remove = true;
            }});
            if (remove) {
                div.remove();
            }
        }
    }
}