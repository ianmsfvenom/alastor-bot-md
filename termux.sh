#!bin/bash
CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $GREEN"[$RED!$GREEN] Bem-vindo ao menu de edição do bot, escolha uma opção:"
echo $CYAN"1) Mover bot da home para sdcard"
echo $CYAN"2) Mover bot do sdcard para home"
echo $RED"3) Sair"
read opc

if [ $opc == "1" ]; then
    echo $YELLOW"Diga o nome da pasta do bot do sdcard (alastor-bot-md = 1)\n\nObs: A pasta do bot do sdcard deve ta na pasta Documents do sdcard"
    read botsdcard

    if [ -z "$botsdcard" ]; then
        echo $RED"Nome de pasta vazia, saindo..."
        exit
    fi

    if [ $botsdcard == "1"];then
        botsdcard = "alastor-bot-md"
    fi

    echo $YELLOW"Diga o nome da pasta do bot da home (alastor-bot-md = 1)\n\nObs: A pasta do bot do sdcard deve ta na pasta Documents do sdcard"
    read bothome

    if [ -z "$bothome" ]; then
        echo $RED"Nome de pasta vazia, saindo..."
        exit
    fi

    if [ $bothome == "1"];then
        bothome = "alastor-bot-md"
    fi

    mv $HOME/$bothome/!(node_modules) /sdcard/Documents/$botsdcard

    echo $GREEN"Pasta do bot do sdcard movida para home com sucesso!"
    exit
elif [ $opc == "2" ]; then
    echo $YELLOW"Diga o nome da pasta do bot do sdcard (alastor-bot-md = 1)\nObs: A pasta do bot do sdcard deve ta na pasta Documents do sdcard"
    read botsdcard

    if [ -z "$botsdcard" ]; then
        echo $RED"Nome de pasta vazia, saindo..."
        exit
    fi

    if [ $botsdcard == "1"];then
        botsdcard = "alastor-bot-md"
    fi

    echo $YELLOW"Diga o nome da pasta do bot da home (alastor-bot-md = 1)\nObs: A pasta do bot do sdcard deve ta na pasta Documents do sdcard"
    read bothome
    
    if [ -z "$bothome" ]; then
        echo $RED"Nome de pasta vazia, saindo..."
        exit
    fi
    
    if [ $bothome == "1"];then
        bothome = "alastor-bot-md"
    fi

    if [ ! -d "/sdcard/Documents/$botsdcard"]; then
        mkdir /sdcard/Documents/$botsdcard
    fi

    mv /sdcard/Documents/$botsdcard/!(node_modules) $HOME/$bothome

    echo $GREEN"Pasta do bot da home movida para o sdcard com sucesso!"
    exit
elif [ $opc == "3" ]; then
    echo $RED"Saindo..."
    exit
fi


