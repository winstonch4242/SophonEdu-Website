// Tutorial Data
const tutorialsData = [
    {
        id: 1,
        title: 'Your First HTML Page',
        description: 'Create a simple HTML page from scratch',
        category: 'beginner',
        duration: '15 min',
        difficulty: 'Easy',
        icon: '📄',
        steps: [
            {
                instruction: 'Let\'s start by creating the basic HTML structure. Type the opening and closing HTML tags.',
                starterCode: '',
                solution: '<html>\n\n</html>',
                hint: 'Use <html> and </html> tags'
            },
            {
                instruction: 'Add a head section inside the HTML tags. This is where metadata goes.',
                starterCode: '<html>\n\n</html>',
                solution: '<html>\n  <head>\n  </head>\n</html>',
                hint: 'Use <head> and </head> tags inside html'
            },
            {
                instruction: 'Add a title inside the head section. Set it to "My First Page".',
                starterCode: '<html>\n  <head>\n  </head>\n</html>',
                solution: '<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n</html>',
                hint: 'Use <title> tags'
            },
            {
                instruction: 'Now add a body section after the head. This is where visible content goes.',
                starterCode: '<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n</html>',
                solution: '<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n  </body>\n</html>',
                hint: 'Use <body> and </body> tags'
            },
            {
                instruction: 'Finally, add an h1 heading that says "Hello World!" inside the body.',
                starterCode: '<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n  </body>\n</html>',
                solution: '<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>',
                hint: 'Use <h1> tags inside body'
            }
        ]
    },
    {
        id: 2,
        title: 'CSS Flexbox Basics',
        description: 'Learn to create flexible layouts with Flexbox',
        category: 'beginner',
        duration: '20 min',
        difficulty: 'Easy',
        icon: '🎨',
        steps: [
            {
                instruction: 'Create a div with class "container". This will be our flex container.',
                starterCode: '',
                solution: '<div class="container">\n</div>',
                hint: 'Use <div class="container">'
            }
        ]
    },
    {
        id: 3,
        title: 'JavaScript Variables',
        description: 'Master variables and data types in JavaScript',
        category: 'beginner',
        duration: '18 min',
        difficulty: 'Easy',
        icon: '💡',
        steps: [
            {
                instruction: 'Declare a variable named "name" using let and assign it the value "John".',
                starterCode: '',
                solution: 'let name = "John";',
                hint: 'Use let keyword followed by variable name'
            },
            {
                instruction: 'Declare a constant named "age" and set it to 25.',
                starterCode: 'let name = "John";',
                solution: 'let name = "John";\nconst age = 25;',
                hint: 'Use const keyword for constants'
            },
            {
                instruction: 'Use console.log to print both variables.',
                starterCode: 'let name = "John";\nconst age = 25;',
                solution: 'let name = "John";\nconst age = 25;\nconsole.log(name, age);',
                hint: 'Use console.log() function'
            }
        ]
    },
    {
        id: 4,
        title: 'HTML Forms',
        description: 'Build interactive forms with HTML',
        category: 'beginner',
        duration: '25 min',
        difficulty: 'Easy',
        icon: '📝',
        steps: [
            {
                instruction: 'Create a form element with an input field for email.',
                starterCode: '',
                solution: '<form>\n  <input type="email" placeholder="Email">\n</form>',
                hint: 'Use <form> and <input type="email">'
            },
            {
                instruction: 'Add a password input field below the email.',
                starterCode: '<form>\n  <input type="email" placeholder="Email">\n</form>',
                solution: '<form>\n  <input type="email" placeholder="Email">\n  <input type="password" placeholder="Password">\n</form>',
                hint: 'Use <input type="password">'
            },
            {
                instruction: 'Add a submit button at the end.',
                starterCode: '<form>\n  <input type="email" placeholder="Email">\n  <input type="password" placeholder="Password">\n</form>',
                solution: '<form>\n  <input type="email" placeholder="Email">\n  <input type="password" placeholder="Password">\n  <button type="submit">Login</button>\n</form>',
                hint: 'Use <button type="submit">'
            }
        ]
    },
    {
        id: 5,
        title: 'CSS Grid Layout',
        description: 'Create complex layouts with CSS Grid',
        category: 'intermediate',
        duration: '30 min',
        difficulty: 'Medium',
        icon: '📐',
        steps: [
            {
                instruction: 'Create a div with class "grid-container" and set display to grid.',
                starterCode: '<style>\n\n</style>\n<div class="grid-container"></div>',
                solution: '<style>\n.grid-container {\n  display: grid;\n}\n</style>\n<div class="grid-container"></div>',
                hint: 'Use display: grid in CSS'
            }
        ]
    },
    {
        id: 6,
        title: 'JavaScript Functions',
        description: 'Write reusable code with functions',
        category: 'intermediate',
        duration: '22 min',
        difficulty: 'Medium',
        icon: '⚙️',
        steps: [
            {
                instruction: 'Create a function named "add" that takes two parameters.',
                starterCode: '',
                solution: 'function add(a, b) {\n\n}',
                hint: 'Use function keyword'
            },
            {
                instruction: 'Make the function return the sum of the two parameters.',
                starterCode: 'function add(a, b) {\n\n}',
                solution: 'function add(a, b) {\n  return a + b;\n}',
                hint: 'Use return keyword'
            },
            {
                instruction: 'Call the function with 5 and 3, and log the result.',
                starterCode: 'function add(a, b) {\n  return a + b;\n}',
                solution: 'function add(a, b) {\n  return a + b;\n}\nconsole.log(add(5, 3));',
                hint: 'Call add(5, 3) inside console.log'
            }
        ]
    },
    {
        id: 7,
        title: 'Responsive Design',
        description: 'Make your website mobile-friendly',
        category: 'intermediate',
        duration: '28 min',
        difficulty: 'Medium',
        icon: '📱',
        steps: [
            {
                instruction: 'Add a meta viewport tag in the head section.',
                starterCode: '<head>\n</head>',
                solution: '<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>',
                hint: 'Use meta tag with viewport'
            }
        ]
    },
    {
        id: 8,
        title: 'JavaScript Arrays',
        description: 'Work with arrays and array methods',
        category: 'intermediate',
        duration: '26 min',
        difficulty: 'Medium',
        icon: '📊',
        steps: [
            {
                instruction: 'Create an array named "fruits" with three fruit names.',
                starterCode: '',
                solution: 'const fruits = ["apple", "banana", "orange"];',
                hint: 'Use square brackets []'
            },
            {
                instruction: 'Add "grape" to the end of the array using push.',
                starterCode: 'const fruits = ["apple", "banana", "orange"];',
                solution: 'const fruits = ["apple", "banana", "orange"];\nfruits.push("grape");',
                hint: 'Use .push() method'
            },
            {
                instruction: 'Log the length of the array.',
                starterCode: 'const fruits = ["apple", "banana", "orange"];\nfruits.push("grape");',
                solution: 'const fruits = ["apple", "banana", "orange"];\nfruits.push("grape");\nconsole.log(fruits.length);',
                hint: 'Use .length property'
            }
        ]
    },
    {
        id: 9,
        title: 'CSS Animations',
        description: 'Bring your designs to life with animations',
        category: 'advanced',
        duration: '35 min',
        difficulty: 'Hard',
        icon: '✨',
        steps: [
            {
                instruction: 'Create a keyframe animation named "fadeIn".',
                starterCode: '<style>\n\n</style>',
                solution: '<style>\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n</style>',
                hint: 'Use @keyframes'
            }
        ]
    },
    {
        id: 10,
        title: 'JavaScript Objects',
        description: 'Master object-oriented programming basics',
        category: 'advanced',
        duration: '32 min',
        difficulty: 'Hard',
        icon: '🎯',
        steps: [
            {
                instruction: 'Create an object named "person" with name and age properties.',
                starterCode: '',
                solution: 'const person = {\n  name: "John",\n  age: 30\n};',
                hint: 'Use curly braces {}'
            },
            {
                instruction: 'Add a method called "greet" that returns a greeting message.',
                starterCode: 'const person = {\n  name: "John",\n  age: 30\n};',
                solution: 'const person = {\n  name: "John",\n  age: 30,\n  greet: function() {\n    return "Hello!";\n  }\n};',
                hint: 'Add a function as a property'
            },
            {
                instruction: 'Call the greet method and log the result.',
                starterCode: 'const person = {\n  name: "John",\n  age: 30,\n  greet: function() {\n    return "Hello!";\n  }\n};',
                solution: 'const person = {\n  name: "John",\n  age: 30,\n  greet: function() {\n    return "Hello!";\n  }\n};\nconsole.log(person.greet());',
                hint: 'Use person.greet()'
            }
        ]
    },
    {
        id: 11,
        title: 'Async JavaScript',
        description: 'Handle asynchronous operations with promises',
        category: 'advanced',
        duration: '40 min',
        difficulty: 'Hard',
        icon: '⏱️',
        steps: [
            {
                instruction: 'Create an async function named "fetchData".',
                starterCode: '',
                solution: 'async function fetchData() {\n\n}',
                hint: 'Use async keyword before function'
            }
        ]
    },
    {
        id: 12,
        title: 'DOM Manipulation',
        description: 'Interact with HTML elements using JavaScript',
        category: 'intermediate',
        duration: '24 min',
        difficulty: 'Medium',
        icon: '🔧',
        steps: [
            {
                instruction: 'Select an element with id "title" using querySelector.',
                starterCode: '',
                solution: 'const title = document.querySelector("#title");',
                hint: 'Use document.querySelector()'
            },
            {
                instruction: 'Change the text content of the element to "New Title".',
                starterCode: 'const title = document.querySelector("#title");',
                solution: 'const title = document.querySelector("#title");\ntitle.textContent = "New Title";',
                hint: 'Use .textContent property'
            }
        ]
    }
];

let currentTutorial = null;
let currentStep = 0;
let filteredTutorials = [...tutorialsData];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTutorials();
    setupEventListeners();
});

function setupEventListeners() {
    // Mobile menu
    document.getElementById('hamburger')?.addEventListener('click', toggleMobileMenu);
    
    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            filterTutorials(e.target.dataset.category);
        });
    });
    
    // Tutorial navigation
    document.getElementById('prevStepBtn')?.addEventListener('click', previousStep);
    document.getElementById('nextStepBtn')?.addEventListener('click', nextStep);
    document.getElementById('resetCodeBtn')?.addEventListener('click', resetCode);
    document.getElementById('runCodeBtn')?.addEventListener('click', runCode);
    
    // Output tabs
    document.querySelectorAll('.output-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.output-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.output-panel').forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');
            const outputType = e.target.dataset.output;
            document.getElementById(outputType === 'preview' ? 'previewFrame' : 'consoleOutput')?.classList.add('active');
        });
    });
    
    // Modal close
    document.getElementById('closeTutorial')?.addEventListener('click', () => {
        closeModal('tutorialModal');
    });
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

function renderTutorials() {
    const grid = document.getElementById('tutorialsGrid');
    if (!grid) return;
    
    if (filteredTutorials.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--gray);">No tutorials found.</p>';
        return;
    }
    
    grid.innerHTML = filteredTutorials.map(tutorial => `
        <div class="tutorial-item" onclick="startTutorial(${tutorial.id})">
            <div class="tutorial-preview-section">
                <div class="tutorial-code-display">
                    <span style="color: #ff79c6;">&lt;div</span>
                    <span style="color: #50fa7b;"> class</span>=
                    <span style="color: #f1fa8c;">"tutorial"</span>
                    <span style="color: #ff79c6;">&gt;</span><br>
                    <span style="color: #f8f8f2;">  ${tutorial.icon} Learn</span><br>
                    <span style="color: #ff79c6;">&lt;/div&gt;</span>
                </div>
                <span class="tutorial-difficulty">${tutorial.difficulty}</span>
            </div>
            <div class="tutorial-info">
                <h3>${tutorial.title}</h3>
                <p>${tutorial.description}</p>
                <div class="tutorial-meta">
                    <span>⏱️ ${tutorial.duration}</span>
                    <span>📝 ${tutorial.steps.length} steps</span>
                </div>
            </div>
        </div>
    `).join('');
}

function filterTutorials(category) {
    if (category === 'all') {
        filteredTutorials = [...tutorialsData];
    } else {
        filteredTutorials = tutorialsData.filter(t => t.category === category);
    }
    renderTutorials();
}

function startTutorial(tutorialId) {
    currentTutorial = tutorialsData.find(t => t.id === tutorialId);
    if (!currentTutorial) return;
    
    currentStep = 0;
    document.getElementById('tutorialTitle').textContent = currentTutorial.title;
    loadStep();
    openModal('tutorialModal');
}

function loadStep() {
    if (!currentTutorial) return;
    
    const step = currentTutorial.steps[currentStep];
    const totalSteps = currentTutorial.steps.length;
    
    // Update instructions
    document.getElementById('tutorialInstructions').innerHTML = `
        <p style="line-height: 1.8; color: var(--dark-light);">${step.instruction}</p>
        ${step.hint ? `<p style="margin-top: 1rem; padding: 1rem; background: var(--white); border-radius: 8px; color: var(--gray);"><strong>💡 Hint:</strong> ${step.hint}</p>` : ''}
    `;
    
    // Update code editor
    document.getElementById('codeEditor').value = step.starterCode;
    
    // Update step indicator
    document.getElementById('stepIndicator').textContent = `Step ${currentStep + 1} of ${totalSteps}`;
    
    // Update navigation buttons
    document.getElementById('prevStepBtn').disabled = currentStep === 0;
    document.getElementById('nextStepBtn').textContent = currentStep === totalSteps - 1 ? 'Complete ✓' : 'Next →';
    
    // Update progress bar
    const progress = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById('tutorialProgress').style.width = `${progress}%`;
    
    // Clear console
    document.getElementById('consoleOutput').innerHTML = '';
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        loadStep();
    }
}

function nextStep() {
    if (!currentTutorial) return;
    
    const step = currentTutorial.steps[currentStep];
    const userCode = document.getElementById('codeEditor').value.trim();
    const expectedCode = step.solution.trim();
    
    // Simple validation (normalize whitespace)
    const normalizeCode = (code) => code.replace(/\s+/g, ' ').toLowerCase();
    
    if (normalizeCode(userCode) === normalizeCode(expectedCode)) {
        if (currentStep < currentTutorial.steps.length - 1) {
            showToast('Great job! Moving to next step.', 'success');
            currentStep++;
            loadStep();
        } else {
            showToast('🎉 Tutorial completed! You\'re awesome!', 'success');
            setTimeout(() => {
                closeModal('tutorialModal');
            }, 2000);
        }
    } else {
        showToast('Not quite right. Check the hint and try again!', 'error');
        logToConsole('Your code doesn\'t match the expected solution. Keep trying!', 'error');
    }
}

function resetCode() {
    if (!currentTutorial) return;
    const step = currentTutorial.steps[currentStep];
    document.getElementById('codeEditor').value = step.starterCode;
    showToast('Code reset to starting point', 'success');
}

function runCode() {
    const code = document.getElementById('codeEditor').value;
    const previewFrame = document.getElementById('previewFrame');
    
    try {
        const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        doc.open();
        doc.write(code);
        doc.close();
        
        logToConsole('Code executed successfully!', 'success');
    } catch (error) {
        logToConsole(`Error: ${error.message}`, 'error');
    }
}

function logToConsole(message, type = 'log') {
    const consoleOutput = document.getElementById('consoleOutput');
    const logEntry = document.createElement('div');
    logEntry.className = `console-log console-${type}`;
    logEntry.textContent = `> ${message}`;
    consoleOutput.appendChild(logEntry);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function openModal(modalId) {
    document.getElementById(modalId)?.classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove('active');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function toggleMobileMenu() {
    document.getElementById('navMenu')?.classList.toggle('active');
}

window.startTutorial = startTutorial;
