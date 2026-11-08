document.body.insertAdjacentHTML('afterbegin', `
    <!-- navigation -->
    <header class="navbar">
        <a href="#" class="logo">
            <span class="logo-icon"><img src="images/techbridge-logo.png" alt=""></span>
        </a>

        <button class="menu-toggle" aria-label="Toggle navigation"
                aria-expanded="false">
            ☰
        </button>

        <nav class="big-screen-nav">
            <a href="index.html" onclick="toggleMenu()">Home</a>
            <a href="#programs" onclick="toggleMenu()">Programs</a>
            <a href="#internship" onclick="toggleMenu()">Internship</a>
            <a href="#community" onclick="toggleMenu()">Community</a>
            <a href="#about" onclick="toggleMenu()">About</a>
            <a href="#contact" onclick="toggleMenu()">Contact</a>
        </nav>

        <a href="https://forms.gle/8EbdSy5ttGfLZfjv5?utm_source=chatgpt.com" class="nav-btn">Apply Now →</a>
    </header>

    <nav class="nav-links">
        <li><a href="index.html" onclick="toggleMenu()">Home</a></li>
        <li><a href="#programs" onclick="toggleMenu()">Programs</a></li>
        <li><a href="#internship" onclick="toggleMenu()">Internship</a></li>
        <li><a href="#community" onclick="toggleMenu()">Community</a></li>
        <li><a href="#about" onclick="toggleMenu()">About</a></li>
        <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
    </nav>
`);


document.querySelector('section#programs').insertAdjacentHTML('afterbegin', `
    <div class="section-heading">
        <span class="section-tag">WHAT WE OFFER</span>
        <h2>Our Programs</h2>
        <p>Build in-demand skills with our specialized programs.</p>
    </div>

    <div class="program-grid">
        <a href="DataAnalysis.html" class="program-card">
            <div class="program-icon blue-icon">📊</div>
            <div>
                <h3>Data Analytics</h3>
                <p>
                    Learn to collect, process, analyze and visualize
                    data to generate meaningful insights and
                    support better decisions.
                </p>
                <span href="WebDev.html">Explore Program →</span>
            </div>
        </a>

        <a href="WebDev.html" class="program-card">
            <div class="program-icon purple-icon">〈/〉</div>
            <div>
                <h3>Web Development</h3>
                <p>
                    Learn to build responsive, functional and
                    modern websites and web applications using
                    web development technologies.
                </p>
                <span href="WebDev.html">Explore Program →</span>
            </div>
        </a>
    </div>
`);


document.body.insertAdjacentHTML('beforeend', `
    <!-- about -->
    <section class="about section" id="about">
        <span class="section-tag">ABOUT <span class="c-green">TECH</span>BRIDGE</span>
        <h2>Building Skills. Creating Opportunities.</h2>
        <p>
            We believe technology creates opportunities for growth.
            TechBridge provides a learning environment where aspiring
            tech professionals can develop relevant skills, gain
            practical experience and prepare for real-world challenges.
        </p>
    </section>

    <!-- community -->
    <section class="community section" id="community">
        <div class="community-icon">☘</div>

        <div class="community-content">
            <span class="section-tag">JOIN OUR COMMUNITY</span>
            <h2>Be Part of the <span class="c-green">Tech</span>Bridge Family</h2>
            <p>
                Stay updated, get support and connect with
                fellow learners by joining our WhatsApp community.
            </p>
            <!-- Replace # with the official WhatsApp invite URL -->
            <a href="https://chat.whatsapp.com/FqpBvYS4oaK32cXDxc8JIS?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            class="whatsapp-btn">
                <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"/></defs><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="512.001" y1=".978" x2="512.001" y2="1025.023"><stop offset="0" stop-color="#61fd7d"/><stop offset="1" stop-color="#2bb826"/></linearGradient><use xlink:href="#a" overflow="visible" fill="url(#b)"/><g><path fill="#FFF" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"/></g></svg>
                Join WhatsApp Community →
            </a>
        </div>
    </section>

    <!-- contact -->
    <section class="contact-section" id="contact">
        <div>
            <h3>Have Questions?</h3>
            <p>Reach out to us at:</p>
        </div>

        <a href="mailto:techbridgebaslink@gmail.com">
            <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="style=bulk"><g id="email"><path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z" fill="#BFBFBF"/><path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z" fill="#000000"/></g></g></svg>
            techbridgebaslink@gmail.com
        </a>

        <a href="https://www.linkedin.com/company/techbridge-services/" 
        target="_blank" 
        rel="noopener noreferrer">
            <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="15px" height="15px" viewBox="7.025 7.025 497.951 497.951" xmlns="http://www.w3.org/2000/svg"><linearGradient id="bat" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)"><stop offset="0" stop-color="#2489be"/><stop offset="1" stop-color="#0575b3"/></linearGradient><path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="url(#bat)"/></svg>
            LinkedIn
        </a>

        <a href="https://www.facebook.com/p/Baselink-Services-100066771475783/" 
        target="_blank" 
        rel="noopener noreferrer">
            <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="15px" height="15px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"/><path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"/><defs><linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse"><stop stop-color="#18ACFE"/><stop offset="1" stop-color="#0163E0"/></linearGradient></defs></svg>
            Facebook
        </a>
    </section>

    <!-- footer -->
    <footer>
        <div class="footer-main">
            <div class="footer-brand">
                <a href="#" class="logo">
                    <span class="c-green">TECH</span><span>BRIDGE</span>
                </a>
                <p>Bridging Talent and Technology.</p>
            </div>

            <div>
                <h4>Quick Links</h4>
                <a href="#home">Home</a>
                <a href="#programs">Programs</a>
                <a href="#internship">Internship</a>
                <a href="#community">Community</a>
                <a href="#about">About</a>
            </div>

            <div>
                <h4>Our Programs</h4>
                <a href="DataAnalysis.html">Data Analytics</a>
                <a href="WebDev.html">Web Development</a>
            </div>

            <div>
                <h4>Stay Connected</h4>
                <a href="https://chat.whatsapp.com/FqpBvYS4oaK32cXDxc8JIS?utm_source=chatgpt.com">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="15px" height="15px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"/></defs><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="512.001" y1=".978" x2="512.001" y2="1025.023"><stop offset="0" stop-color="#61fd7d"/><stop offset="1" stop-color="#2bb826"/></linearGradient><use xlink:href="#a" overflow="visible" fill="url(#b)"/><g><path fill="#FFF" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"/></g></svg>
                    Community
                </a>
                <a href="mailto:techbridgebaslink@gmail.com">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="style=bulk"><g id="email"><path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z" fill="#BFBFBF"/><path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z" fill="#000000"/></g></g></svg>
                    Email Us
                </a>
                <a href="https://www.linkedin.com/company/techbridge-services/" 
                target="_blank" 
                rel="noopener noreferrer">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="15px" height="15px" viewBox="7.025 7.025 497.951 497.951" xmlns="http://www.w3.org/2000/svg"><linearGradient id="bat" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)"><stop offset="0" stop-color="#2489be"/><stop offset="1" stop-color="#0575b3"/></linearGradient><path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="url(#bat)"/></svg>
                    LinkedIn
                </a>
                <a href="https://www.facebook.com/p/Baselink-Services-100066771475783/" 
                target="_blank" 
                rel="noopener noreferrer">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="15px" height="15px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"/><path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"/><defs><linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse"><stop stop-color="#18ACFE"/><stop offset="1" stop-color="#0163E0"/></linearGradient></defs></svg>
                    Facebook
                </a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2026 TechBridge. All rights reserved.</p>
            <p>Learn | Build | Grow</p>
        </div>
    </footer>
`);

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

let navOpened = false;


if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        menuButtonClicked = true;
        toggleMenu();
    });
}

function toggleMenu() {
    menuToggle.textContent = navOpened ? "☰" : "✕";
    if (navOpened === false) {
        navLinks.style.left = '0';
        navOpened = true;
    } else {
        navLinks.style.left = "-100%";
        navOpened = false;
    };
};

navLinks.addEventListener("click", () => {
    menuClicked = true;
});

document.body.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && navOpened && !menuToggle.contains(e.target)) {
        toggleMenu();
    }
});