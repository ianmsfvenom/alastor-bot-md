#!bin/bash
CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo -e $GREEN"[$RED!$GREEN] Bem-vindo ao menu de edição do bot, escolha uma opção:"
echo -e $CYAN"1) Mover bot da home para sdcard"
echo -e $CYAN"2) Mover bot do sdcard para home"
echo -e $RED"3) Sair"
read opc

clear
if [ $opc == "1" ]; then
    echo -e $YELLOW"Diga o nome da pasta do bot do sdcard (alastor-bot-md = 1)\n\nObs: A pasta do bot do sdcard deve ta na pasta Documents do sdcard"
    read botsdcard

    if [ -z "$botsdcard" ]; then
        echo -e $RED"Nome de pasta vazia, saindo..."
        exit
    fi

    if [ $botsdcard == "1" ]; then
        botsdcard="alastor-bot-md"
    fi

    clear
    echo -e $YELLOW"Diga o nome da pasta do bot da home (alastor-bot-md = 1)\n\nObs: A pasta do bot do sdcard deve ta na pasta Documents do sdcard"
    read bothome

    if [ -z "$bothome" ]; then
        echo -e $RED"Nome de pasta vazia, saindo..."
        exit
    fi

    if [ $bothome == "1" ]; then
        bothome="alastor-bot-md"
    fi

    if [ ! -d "/sdcard/Documents/$botsdcard" ]; then
        mkdir /sdcard/Documents/$botsdcard
        mkdir /sdcard/Documents/$botsdcard/lib
        mkdir /sdcard/Documents/$botsdcard/src
    fi

    cp -r $HOME/$bothome/src/* /sdcard/Documents/$botsdcard/src
    cp -r $HOME/$bothome/lib/* /sdcard/Documents/$botsdcard/lib
    cp $HOME/$bothome/README.md /sdcard/Documents/$botsdcard
    cp $HOME/$bothome/config.js /sdcard/Documents/$botsdcard
    cp $HOME/$bothome/index.js /sdcard/Documents/$botsdcard
    cp $HOME/$bothome/install.sh /sdcard/Documents/$botsdcard
    cp $HOME/$bothome/package.json /sdcard/Documents/$botsdcard
    cp $HOME/$bothome/start.sh /sdcard/Documents/$botsdcard
    cp $HOME/$bothome/update.js /sdcard/Documents/$botsdcard
    cp $HOME/$bothome/LICENSE /sdcard/Documents/$botsdcard

    echo -e $GREEN"Pasta do bot do home movida para /sdcard com sucesso!"
    exit
elif [ $opc == "2" ]; then
    echo -e $YELLOW"Diga o nome da pasta do bot do sdcard (alastor-bot-md = 1)\nObs: A pasta do bot do sdcard deve ta na pasta Documents do sdcard"
    read botsdcard

    if [ -z "$botsdcard" ]; then
        echo -e $RED"Nome de pasta vazia, saindo..."
        exit
    fi

    if [ $botsdcard == "1" ]; then
        botsdcard="alastor-bot-md"
    fi

    clear
    echo -e $YELLOW"Diga o nome da pasta do bot da home (alastor-bot-md = 1)\nObs: A pasta do bot do sdcard deve ta na pasta Documents do sdcard"
    read bothome

    if [ -z "$bothome" ]; then
        echo -e $RED"Nome de pasta vazia, saindo..."
        exit
    fi
    
    if [ $bothome == "1" ]; then
        bothome="alastor-bot-md"
    fi

    if [ ! -d "/sdcard/Documents/$botsdcard" ]; then
        mkdir /sdcard/Documents/$botsdcard
    fi

    cp -r /sdcard/Documents/$botsdcard/* $HOME/$bothome

    echo -e $GREEN"Pasta do bot do /sdcard movida para o home com sucesso!"
    exit
elif [ $opc == "3" ]; then
    echo -e $RED"Saindo..."
    exit
fi


