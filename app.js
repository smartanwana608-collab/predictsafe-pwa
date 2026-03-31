body {
    margin: 0;
    font-family: Arial;
    background: #0A0A0A;
}

/* TOP BAR */
.topbar {
    height: 60px;
    background: #0B1F3A;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    color: white;
}

.logo {
    height: 30px;
}

.topbar i {
    font-size: 22px;
    cursor: pointer;
}

/* SIDEBAR */
.sidebar {
    position: fixed;
    left: -260px;
    top: 0;
    width: 260px;
    height: 100%;
    background: #111;
    transition: 0.3s;
    padding-top: 70px;
}

.sidebar a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    color: white;
    text-decoration: none;
}

.sidebar a:hover {
    background: #1F8A5B;
}

/* FRAME */
iframe {
    width: 100%;
    height: calc(100vh - 60px);
    border: none;
}
