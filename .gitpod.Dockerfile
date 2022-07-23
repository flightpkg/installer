FROM gitpod/workspace-full-vnc:2022-05-17-12-26-08

# Install Electron dependencies.
RUN sudo apt install -y libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
