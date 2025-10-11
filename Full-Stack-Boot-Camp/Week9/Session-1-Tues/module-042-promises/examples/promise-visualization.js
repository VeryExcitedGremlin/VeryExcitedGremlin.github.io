// Promise Visualization JavaScript

const buttons = document.querySelectorAll('.btn');

// Helper to disable all buttons during animations
function toggleButtons(disabled) {
    buttons.forEach(button => button.disabled = disabled);
}

// Helper to add a line to a visual console
function logToConsole(consoleId, message, options = {}) {
    const { delay = 0, isPromise = false, isError = false } = options;
    return new Promise(resolve => {
        setTimeout(() => {
            const consoleEl = document.getElementById(consoleId);
            const line = document.createElement('div');
            line.textContent = `> ${message}`;
            line.classList.add('console-line');
            if (isPromise) line.classList.add('promise');
            if (isError) line.classList.add('error');
            consoleEl.appendChild(line);
            consoleEl.scrollTop = consoleEl.scrollHeight; // Auto-scroll
            resolve();
        }, delay);
    });
}

// Helper to highlight a line of code
function highlightLine(codeId, lineNumber, delay = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            const codeEl = document.getElementById(codeId);
            // Remove previous highlights
            codeEl.querySelectorAll('.line').forEach(l => l.classList.remove('highlight'));
            // Add new highlight
            const lineEl = codeEl.querySelector(`[data-line="${lineNumber}"]`);
            if (lineEl) {
                lineEl.classList.add('highlight');
            }
            resolve();
        }, delay);
    });
}

function clearAllHighlights() {
     document.querySelectorAll('.line').forEach(l => l.classList.remove('highlight'));
}

// --- SCENARIO 1: SYNC ---
document.getElementById('run-sync').addEventListener('click', async () => {
    toggleButtons(true);
    document.getElementById('console-sync').innerHTML = '';
    clearAllHighlights();
    const delay = 300;

    await highlightLine('code-sync', 1);
    await logToConsole('console-sync', 'Start cooking...', { delay });
    
    await highlightLine('code-sync', 2);
    await logToConsole('console-sync', 'Chop vegetables.', { delay });
    
    await highlightLine('code-sync', 3);
    await logToConsole('console-sync', 'Add to pot.', { delay });
    
    await highlightLine('code-sync', 4);
    await logToConsole('console-sync', 'Cook for 10 minutes.', { delay });
    
    await highlightLine('code-sync', 5);
    await logToConsole('console-sync', 'Serve dinner.', { delay });
    
    setTimeout(clearAllHighlights, delay);
    toggleButtons(false);
});

// --- SCENARIO 2: ASYNC PROBLEM ---
document.getElementById('run-async-problem').addEventListener('click', async () => {
    toggleButtons(true);
    document.getElementById('console-async-problem').innerHTML = '';
    clearAllHighlights();
    const delay = 300;
    
    await highlightLine('code-async-problem', 9);
    await logToConsole('console-async-problem', 'Start of script.', { delay });

    await highlightLine('code-async-problem', 10);
    // orderPizza() is called
    await highlightLine('code-async-problem', 1, delay);
    await highlightLine('code-async-problem', 2);
    await logToConsole('console-async-problem', 'Ordering a pizza...', { delay });

    await highlightLine('code-async-problem', 4);
    // setTimeout is initiated, but we don't wait
    setTimeout(async () => {
        await highlightLine('code-async-problem', 5, 0); // show it happens later
         await logToConsole('console-async-problem', '(2 seconds later...) Pizza is ready! But the value was never captured.', { isPromise: true });
         setTimeout(clearAllHighlights, delay);
    }, 2000);

    await highlightLine('code-async-problem', 11, delay);
    await logToConsole('console-async-problem', 'Doing other things...', { delay });
    
    await highlightLine('code-async-problem', 12);
    await logToConsole('console-async-problem', 'Eating pizza: undefined', { delay, isError: true });

    await highlightLine('code-async-problem', 13);
    await logToConsole('console-async-problem', 'End of script.', { delay });

    toggleButtons(false);
});

// --- SCENARIO 3: PROMISE SOLUTION ---
document.getElementById('run-promise').addEventListener('click', async () => {
    toggleButtons(true);
    document.getElementById('console-promise').innerHTML = '';
    clearAllHighlights();
    const delay = 300;

    await highlightLine('code-promise', 10);
    await logToConsole('console-promise', 'Start of script.', { delay });

    await highlightLine('code-promise', 11);
    
    // Call the promise function
    setTimeout(async () => {
         await highlightLine('code-promise', 1);
         await highlightLine('code-promise', 2, delay);
         await logToConsole('console-promise', 'Ordering a pizza...');
         await highlightLine('code-promise', 3, delay);
         await logToConsole('console-promise', 'Promise created. Status: pending', { isPromise: true });
         await highlightLine('code-promise', 4);
    }, delay);


    // The .then part is set up but doesn't run yet
    await highlightLine('code-promise', 12, delay);

    // Synchronous code continues
    await highlightLine('code-promise', 15, delay);
    await logToConsole('console-promise', 'Doing other things...', { delay });

    await highlightLine('code-promise', 16);
    await logToConsole('console-promise', 'End of script.', { delay });
    
    // Now, wait for the promise to resolve
    setTimeout(async () => {
        await highlightLine('code-promise', 5, 0);
        await logToConsole('console-promise', 'Promise resolved!', { isPromise: true });
        await highlightLine('code-promise', 12, delay);
        await highlightLine('code-promise', 13, delay);
        await logToConsole('console-promise', 'Eating pizza: 🍕 Pizza is ready!', { isPromise: true, delay });
        setTimeout(clearAllHighlights, delay);
        toggleButtons(false);
    }, 2000);
});

// --- SCENARIO 4: ASYNC/AWAIT ---
// We need the promise function available for this scenario
function orderPizzaWithPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍕 Pizza is ready!");
    }, 2000);
  });
}

document.getElementById('run-async-await').addEventListener('click', async () => {
    toggleButtons(true);
    document.getElementById('console-async-await').innerHTML = '';
    clearAllHighlights();
    const delay = 300;
    
    await highlightLine('code-async-await', 10);
    await logToConsole('console-async-await', 'Start of script.', { delay });

    await highlightLine('code-async-await', 11);
    
    // This is the call to getDinner();
    setTimeout(async () => {
        await highlightLine('code-async-await', 3, 0);
        await highlightLine('code-async-await', 4, delay);
        await logToConsole('console-async-await', 'Inside async function.', { delay });
        
        await highlightLine('code-async-await', 5, delay);
        await logToConsole('console-async-await', 'Awaiting promise... Function is paused here.', { delay, isPromise: true });

        // Pizza is ready
        setTimeout(async () => {
            await logToConsole('console-async-await', 'Promise resolved! Resuming function.', { isPromise: true, delay });
            await highlightLine('code-async-await', 6, delay);
            await logToConsole('console-async-await', 'Eating pizza: 🍕 Pizza is ready!', { isPromise: true, delay });
            await highlightLine('code-async-await', 7, delay);
            await logToConsole('console-async-await', 'Finished dinner.', { delay });
            
            setTimeout(clearAllHighlights, delay);
            toggleButtons(false);
        }, 2000);
    }, delay);
    
    await highlightLine('code-async-await', 12, delay * 2);
    await logToConsole('console-async-await', 'Doing other things...', { delay });

    await highlightLine('code-async-await', 13);
    await logToConsole('console-async-await', 'End of script.', { delay });
});