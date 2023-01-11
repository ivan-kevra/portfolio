import React from 'react';
import avatar from './avatar.jpg'
import './App.css';

function App() {
    return (
        <body>
        <main className="cv">
            <section className="about">
                <h2 className="cosmos">About</h2>
                <header className="header">
                    <figure className="photo">
                        <img src={avatar} alt="Ivan Kevra"/>
                    </figure>
                </header>
                <article className="contacts">
                    <h3 className="contacts__text">contact me</h3>
                    <div className="underlined"></div>
                    <ul className="phone">
                        <li className="phone__icon"><i className="fas fa-phone-volume"></i></li>
                        <li className="phone_number">Telegram : @ivank_96</li>
                    </ul>
                    <ul className="skype">
                        <li className="skype__icon"><i className="fab fa-skype"></i></li>
                        <li className="skype__nik">vanyakevra@gmail.com</li>
                    </ul>
                    <ul className="linkedin">
                        <li className="linkedIn__icon"><i className="fab fa-linkedin"></i></li>
                        <li className="linkedIn__link">
                            <a id="link" href="https:linkedin.com/in/ivan-kevra-576aa21ab/">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </article>
                <article className="skills">
                    <h3 className="contacts__text">skills</h3>
                    <div className="underlined"></div>
                    <ul className="skills_list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript/Typescript</li>
                        <li>React</li>
                        <li>Git</li>
                    </ul>
                    <div id="work-examples">
                        <h3 className="contacts__text">work examples</h3>
                        <div className="underlined"></div>
                        <nav className="works">
                            <ul>
                                <li>
                                    <a href="https://ivan-kevra.github.io/todolist/">Todolist</a>
                                </li>
                                <li>
                                    <a href="https://www.codewars.com/users/ivan-kevra">Codewars profile</a>
                                </li>
                                <li>
                                    <a href="https://github.com/ivan-kevra">My GitHub</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </article>
                <div className="rss"></div>
            </section>
            <article className="about-me">
                <h1>Ivan Kevra</h1>
                <h5>Junior Front-end Developer</h5>
                <div className="underlined-grey"></div>
                <h2>About me</h2>
                <div className="description">
                    I am a graduate of Belarus State Economic University. My specialty is banking. And now I am a
                    beginner
                    Front-End developer.
                    My main qualities are the ability to work in a team and the ability to learn quickly.
                    Also at the moment I am actively learning to use JavaScript, React, TypeScript.
                </div>
                <h2>Education</h2>
                <div className="description">
                    <div className="description__item1">
                        <div>
                            <span className="strong">09/2014</span> – <span className="strong">09/2018</span>
                        </div>
                        <div>
                            <span className="strong">Belarus State Economic University</span>
                        </div>
                    </div>
                    <div className="description__item2">
                        <span className="strong">Specialty:</span> Banking
                    </div>
                </div>
                <div className="description">
                    <div className="description__item1">
                        <div>
                            <span className="strong">06/2022</span> – <span className="strong">09/2022</span>
                        </div>
                        <div>
                            <span className="strong">Rolling Scopes School</span>
                        </div>
                    </div>
                    <div className="description__item2">
                        <span className="strong">Course:</span> JavaScript Development
                    </div>
                </div>
                <div className="description">
                    <div className="description__item1">
                        <div>
                            <span className="strong">09/2022 – current time</span>
                        </div>
                        <div>
                            <span className="strong">IT-incubator</span>
                        </div>
                    </div>
                    <div className="description__item2">
                        <span className="strong">Course</span>:
                        Front-end development
                    </div>
                </div>

                <h2>Languages</h2>
                <div className="description">
                    <div className="description__item1">
                        <div>
                            <span className="strong">Russian:</span>
                        </div>
                    </div>
                    <div className="description__item2">
                        <span className="strong">Native speaker</span>
                    </div>
                </div>
                <div className="description">
                    <div className="description__item1">
                        <div>
                            <span className="strong">English:</span>
                        </div>
                    </div>
                    <div className="description__item2">
                        <span className="strong">Intermediate (B1)</span>
                    </div>
                </div>

            </article>
        </main>
        </body>
    );
}

export default App;
