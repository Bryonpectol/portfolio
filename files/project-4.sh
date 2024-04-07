#This is my Project 4 Script. I will attempt to recreate Nessus Scanner

echo ""

echo -e "\e[1;36mPlease make sure you have nmap installed on your Linux machine! :) \e[1;0m"

date
today=$(date)
today=`date`

git clone https://github.com/Bryonpectol/metasploit-exploits.git

#awk -F ',' '{print $2}' metasploit-exploits/metasploit-exploits.csv

#cd /usr/share/nmap/scripts/
git clone https://github.com/vulnersCom/nmap-vulners.git
#cd ~/project-4/

git clone https://github.com/scipag/vulscan scipag_vulscan
ln -s `pwd`/scipag_vulscan /usr/share/nmap/scripts/vulscan

echo -e "\e[1;33mEnter IP address or domain you want to scan: \e[1;0m"

read  ipaddress

echo "Scanning $ipaddress..."

mkdir ipscanner-reports

echo "Loading... Please be patient."

nmap $ipaddress > ipscanner-reports/open-ports.txt

echo "Still loading..."

nmap -v -A -sV $ipaddress > ipscanner-reports/nmap-reports.txt

echo "$today - $ipaddress" >> ipscanner-reports/scanned-history.txt

echo "Please keep waiting..."
echo -e "\e[1;32m(\_/)"
echo -e "(0_0)"
echo -e 'C(")(")\e[1;0m'
#nmap –script vuln $ipaddress

#nmap –script nmap-vulners/ -sV $ipaddress

sudo nmap -sV --script=vulscan/vulscan.nse $ipaddress > ipscanner-reports/vulscan-report.txt

echo "A little longer..."

sudo nmap --script nmap-vulners/ -sV $ipaddress > ipscanner-reports/vulners-report.txt

#sudo nmap -Pn --script vuln $ipaddress > ipscanner-reports/vuln-reports.txt

awk -F ',' '{print $2}' metasploit-exploits/metasploit-exploits.csv > metasploit-exploits/exploits.txt

clear

echo "Loading Complete! Reports gathered in ./ipscanner-reports/"

echo ""

cat ipscanner-reports/vulscan-report.txt | grep -c ']' ipscanner-reports/vulscan-report.txt > ipscanner-reports/total-vulnerabilities.txt

numberofexploits = cat ipcanner-reports/total-vulnerabilities.txt

echo "does this work?" $numberofexploits

echo -e "\e[1;33mThere are $numberofexploits vulnerabilities of $ipaddress.\e[1;0m"

echo ""

echo -e "\e[1;33mDo you want to view IP Scanner reports?\e[1;0m"

select yn in "Yes" "No"; do
    case $yn in
        Yes ) gnome-terminal && cd ../ipscanner-reports/; break;;
        No ) echo "Continuing..." && break;;
    esac
done



echo -e "\e[1;33mDo you want to search for an exploit targeting $ipaddress?\e[1;0m"

select yn in "Yes" "No"; do
    case $yn in
        Yes )echo "Keywords: " && read exploitsearch && grep -i $exploitsearch ipscanner-reports/vulscan-report.txt; break;;
        No ) echo "Continuing..." && break;;
    esac
done



#read exploitsearch

#grep -i $exploitsearch ipscanner-reports/vulscan-report.txt

#grep -i $exploitsearch ipscanner-reports/vulscan-report.txt

echo -e "\e[1;33m Do you want to open Metasploit? \e[1;0m"

select yn in "Yes" "No"; do
    case $yn in
        Yes )gnome-terminal -- sh -c "bash -c \"msfconsole; exec bash\""; break;;
        No ) break;;
    esac
done


