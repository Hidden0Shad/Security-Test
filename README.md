# Cybertron Academy Website

## Project Title & Description

Cybertron Academy is a responsive, multi-page school website built with semantic HTML, CSS, and vanilla JavaScript. It presents the school's identity, academic approach, school life, admissions information, parent portal entry point, and contact details in a polished education-focused interface.

The site includes:

- A responsive school homepage with a hero section, school values, feature cards, and impact statistics.
- Shared navigation with dropdown menus for Our School, Academics, and Admissions.
- Font Awesome icons for navigation, contact details, actions, and social links.
- Responsive layouts for desktop, tablet, and mobile screens.
- Local school imagery from `static/images`.
- Admissions enquiry and parent portal forms with front-end confirmation feedback.
- Shared styling and behavior files for maintainability.

## Table of Contents

1. [Security & Description](#project-title--description)
2. [Project Structure](#project-structure)
3. [Installation Guide](#installation-guide)
4. [Usage Examples](#usage-examples)
5. [Configuration / Dependencies](#configuration--dependencies)
6. [Contribution Guidelines](#contribution-guidelines)
7. [License Information](#license-information)
8. [Contact Information](#contact-information)

## Project Structure

```text
Security-Test/
├── README.md
├── static/
│   ├── CSS/
│   │   ├── school.css       # Main school layout and responsive styles
│   │   ├── style.css        # Shared reset and accessibility styles
│   │   └── page CSS files    # Legacy page-specific styles retained in the project
│   ├── JS/
│   │   ├── school.js         # Navigation and school form interactions
│   │   └── script.js         # Legacy shared interaction file
│   └── images/               # School images and favicon
└── templates/
	├── index.html            # Homepage
	├── platform.html         # Our School page
	├── solutions.html        # Academics page
	├── resources.html        # School Life page
	├── company.html          # Our Story page
	├── register.html         # Admissions enquiry page
	└── login.html            # Parent portal page
```

## Installation Guide

### Requirements

- A modern web browser such as Chrome, Edge, Firefox, or Safari.
- A code editor such as Visual Studio Code.
- Optional: Python 3 or another local static-file server.

### Run directly from the file system

1. Open the project folder in Visual Studio Code.
2. Open `templates/index.html` in a browser.
3. Use the navigation links to visit the other pages.

### Run with a local server

Using Python:

```powershell
cd "c:\Users\HP\Desktop\Dubbed Prog\Security-Test"
python -m http.server 8000
```

Open [http://localhost:8000/templates/index.html](http://localhost:8000/templates/index.html) in your browser.

Using the VS Code Live Server extension:

1. Install the **Live Server** extension.
2. Right-click `templates/index.html`.
3. Select **Open with Live Server**.

## Usage Examples

### Visit the homepage

Open:

```text
templates/index.html
```

### Navigate to a school section

The shared navigation links pages using relative paths:

```html
<a href="platform.html">Our School</a>
<a href="solutions.html">Academics</a>
<a href="resources.html">Admissions</a>
```

### Submit an admissions enquiry

The admissions form uses the `data-school-form` attribute. The current implementation displays a confirmation message in the browser and resets the form:

```html
<form data-school-form>
	<label for="parent-name">Parent or guardian name</label>
	<input id="parent-name" required>
	<button type="submit">Send enquiry</button>
</form>
```

At present, form submissions are front-end demonstrations. They do not send data to a server or database.

### Customize school colors

Update the design tokens at the top of `static/CSS/school.css`:

```css
:root {
	--school-gold: #c69a48;
	--school-navy: #17364c;
	--school-cream: #f7f4ee;
}
```

### Add a local image

1. Place the image in `static/images/`.
2. Reference it from a template:

```html
<img src="../static/images/example.jfif" alt="Descriptive image text">
```

## Configuration / Dependencies

The project has no build step and does not require a package manager for normal use.

### External dependency

Font Awesome is loaded through the CDN link included in each HTML page:

```html
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
>
```

An internet connection is required for the Font Awesome icons to load. The local school images, CSS, JavaScript, and favicon do not require external services.

### Optional development tools

- Visual Studio Code
- Live Server extension
- Python 3 local HTTP server
- Prettier for formatting HTML, CSS, and JavaScript

## Contribution Guidelines

Contributions are welcome.

1. Create a new branch for your change.
2. Keep page layouts consistent with the shared school navigation and design tokens.
3. Use semantic HTML and descriptive image `alt` text.
4. Keep styles in `school.css` unless a new page-specific stylesheet is necessary.
5. Use Font Awesome for interface icons rather than drawing duplicate icons manually.
6. Test all navigation links at desktop and mobile widths.
7. Test forms after changing form markup or JavaScript.
8. Keep contact details and school information accurate.
9. Submit a pull request or share the changed files with a clear description.

### Reporting bugs

When reporting a bug, include:

- The page where the issue occurs.
- Browser and screen size.
- Steps to reproduce the issue.
- Expected behavior.
- Actual behavior.
- A screenshot or console error when available.

## License Information

No formal open-source license has been selected for this project yet. Until a license is added, the code should be treated as proprietary: do not redistribute, publish, or reuse it commercially without permission from the project maintainer.

If the project is later released for public reuse, add a license file such as `LICENSE` and update this section with the chosen license terms.

## Contact Information

For questions, admissions enquiries, or project feedback:

- **Address:** No 99b First East Circular Road, Opposite Catholic Church Beside Alpha Furnitures, Benin City, Edo State
- **Phone:** [07077388482](tel:07077388482)
- **Email:** [aptech.benin@gmail.com](mailto:aptech.benin@gmail.com)

