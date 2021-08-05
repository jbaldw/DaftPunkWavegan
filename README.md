<h1 align="center">
  <br>
  <img src="https://th.bing.com/th/id/OIP.kHsD6X86NnpHLwhbm3ViBwHaIJ?pid=ImgDet&rs=1" alt="Daft Punk" width="200">
  <br>
  Daft Punk WaveGAN Sample Generator
  <br>
</h1>

<h4 align="center">A website capable of generating music samples from a generative adversarial network trained on the songs from Daft Punk's <i>Homework</i>.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>


## Key Features

* Accessible interface for generating new samples from trained model
* Live preview of samples sent to browser
* Generated samples saved in root directory of server
* Node.js and Express.js backend
* Sample generator program runnable on any Windows computer without need for Python environment

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jbaldw/daft-punk-wavegan.git

# Go into the repository
$ cd daft-punk-wavegan

# Install dependencies
$ npm install

# Run the app
$ npm start
```

Note: The entire site is being served through Node.js and the default port is being used so only localhost (without port numbers) needs to be accessed to view the website.

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [Express.js](https://www.npmjs.com/package/express)
- [jQuery](https://jquery.com/)
- [PyInstaller](https://www.pyinstaller.org/)

## Related

[WaveGAN v2](https://github.com/chrisdonahue/wavegan) - GitHub repo for original WaveGAN code


## License

MIT
