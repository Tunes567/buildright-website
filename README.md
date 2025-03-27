# BuildRight Contractors Website

A modern, professional website for a General Contractor business built with HTML5, CSS3, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Smooth scrolling navigation
- Animated sections and elements
- Contact form with validation
- Project showcase with hover effects
- Client testimonials
- Newsletter subscription
- Google Maps integration
- Social media integration

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox)
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome Icons
- Google Maps API

## Project Structure

```
buildright-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── hero-bg.jpg
│   ├── about.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/buildright-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd buildright-website
   ```

3. Open `index.html` in your web browser or use a local server.

## Customization

### Images
Replace the images in the `images` folder with your own:
- `hero-bg.jpg`: Hero section background image
- `about.jpg`: About section image
- `project1.jpg`, `project2.jpg`, `project3.jpg`: Project showcase images

### Colors
The website uses CSS variables for colors. You can modify them in `css/style.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #333;
    --light-gray: #f8f9fa;
    --dark-gray: #343a40;
}
```

### Contact Form
To make the contact form functional:
1. Set up a backend server (PHP, Node.js, etc.)
2. Modify the form submission handler in `js/main.js`
3. Add your server endpoint URL

### Google Maps
Replace the Google Maps embed URL in `index.html` with your business location.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/yourusername/buildright-website 