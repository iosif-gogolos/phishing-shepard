# Phishing Shepard

**Phishing Shepard** is a lightweight, static website designed to help users detect potential phishing attempts by analyzing copied messages for embedded URLs. Built with **HTML**, **Tailwind CSS**, and **JavaScript**, this tool extracts URLs from user input, retrieves metadata from the identified links, and provides feedback on their authenticity. The project supports multi-language functionality, with default text in **German**, making it accessible to a broader audience.

## Features
- **URL Extraction**: Automatically detects URLs within pasted messages.
- **Metadata Retrieval**: Uses Axios to fetch and display metadata (title, description) from the detected URL.
- **User Feedback**: Provides clear feedback on the potential safety of the link.
- **Secure and Sanitized**: Utilizes DOMPurify to ensure all user inputs are sanitized, preventing XSS attacks.
- **Multi-language Support**: Built-in support for German via i18next, with easy extension for additional languages.
- **Tailwind CSS Styling**: Clean and modern design using Tailwind CSS for a responsive and visually appealing interface.

## Getting Started
To get started with **Phishing Shepard**, simply clone the repository and open the `index.html` file in your browser. No additional setup is required.

### Prerequisites
Ensure you have the following tools installed:
- A modern web browser (Chrome, Firefox, etc.)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/phishing-shepard.git
    ```
2. Navigate to the project directory:
    ```bash
    cd phishing-shepard
    ```
3. Open `index.html` in your browser:
    ```bash
    open index.html
    ```

## Technologies Used
- **HTML**
- **Tailwind CSS**
- **JavaScript**
- **Axios**
- **DOMPurify**
- **i18next**

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the open-source community for the tools and libraries used in this project.
