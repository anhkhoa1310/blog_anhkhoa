---
title: "Bảo mật mạng - Nền tảng an ninh hệ thống mạng"
date: "2024-09-15"
excerpt: "Khám phá các khái niệm cơ bản về bảo mật mạng, từ firewall đến VPN và các kỹ thuật bảo vệ mạng doanh nghiệp."
category: "An ninh mạng"
tags: ["Network Security", "Firewall", "VPN", "IDS/IPS", "Network Monitoring"]
author: "Huỳnh Anh Khoa"
---

# Bảo mật mạng - Nền tảng an ninh hệ thống mạng

Bảo mật mạng (Network Security) là một trong những lĩnh vực quan trọng nhất trong cybersecurity. Là sinh viên chuyên ngành An ninh mạng tại HUTECH, tôi muốn chia sẻ những kiến thức cơ bản về bảo mật mạng.

## Network Security là gì?

Network Security bao gồm các biện pháp bảo vệ mạng máy tính khỏi:

- **Unauthorized Access**: Truy cập trái phép
- **Data Theft**: Đánh cắp dữ liệu
- **Malware**: Phần mềm độc hại
- **DDoS Attacks**: Tấn công từ chối dịch vụ
- **Man-in-the-Middle**: Tấn công trung gian

## OSI Model và Security

### 7 Layers của OSI Model

```
Layer 7: Application    - Web Security, Email Security
Layer 6: Presentation  - Encryption, Compression
Layer 5: Session       - Session Management
Layer 4: Transport     - TCP/UDP Security
Layer 3: Network       - IP Security, Routing
Layer 2: Data Link     - Switch Security, VLAN
Layer 1: Physical      - Physical Security
```

### Security Controls theo từng layer

```bash
# Layer 3 - Network Security
# IP filtering
iptables -A INPUT -s 192.168.1.0/24 -j ACCEPT
iptables -A INPUT -s 10.0.0.0/8 -j DROP

# Layer 4 - Transport Security
# Port filtering
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

## Firewall - Hàng rào bảo vệ đầu tiên

### Types of Firewalls

#### 1. Packet Filtering Firewall

```bash
# iptables rules example
# Allow SSH
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Allow HTTP/HTTPS
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Block everything else
iptables -A INPUT -j DROP
```

#### 2. Stateful Firewall

```bash
# Allow established connections
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Allow new connections from internal network
iptables -A INPUT -s 192.168.1.0/24 -m state --state NEW -j ACCEPT
```

#### 3. Application Layer Firewall

```python
# Example with Python
import socket
import threading

class ApplicationFirewall:
    def __init__(self):
        self.rules = []
    
    def add_rule(self, protocol, port, action):
        self.rules.append({
            'protocol': protocol,
            'port': port,
            'action': action
        })
    
    def check_packet(self, packet):
        for rule in self.rules:
            if self.match_rule(packet, rule):
                return rule['action']
        return 'DENY'
```

### Firewall Configuration Best Practices

```bash
#!/bin/bash
# Firewall setup script

# Flush existing rules
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X

# Default policies
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Allow loopback
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT

# Allow established connections
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Allow SSH
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Allow HTTP/HTTPS
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Log dropped packets
iptables -A INPUT -j LOG --log-prefix "DROPPED: "
```

## VPN - Virtual Private Network

### VPN Types

#### 1. Site-to-Site VPN

```bash
# OpenVPN site-to-site configuration
# Server config
port 1194
proto udp
dev tun
ca ca.crt
cert server.crt
key server.key
dh dh2048.pem
server 10.8.0.0 255.255.255.0
ifconfig-pool-persist ipp.txt
push "route 192.168.1.0 255.255.255.0"
client-to-client
keepalive 10 120
cipher AES-256-CBC
```

#### 2. Remote Access VPN

```bash
# Client configuration
client
dev tun
proto udp
remote vpn-server.com 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client.crt
key client.key
cipher AES-256-CBC
```

### VPN Security

```python
# VPN connection monitoring
import subprocess
import time

def check_vpn_connection():
    try:
        result = subprocess.run(['ping', '-c', '1', '10.8.0.1'], 
                              capture_output=True, text=True)
        return result.returncode == 0
    except:
        return False

def monitor_vpn():
    while True:
        if not check_vpn_connection():
            print("VPN connection lost!")
            # Implement reconnection logic
        time.sleep(30)
```

## IDS/IPS - Intrusion Detection/Prevention Systems

### Snort IDS Configuration

```bash
# Snort configuration
# /etc/snort/snort.conf

# Network variables
ipvar HOME_NET 192.168.1.0/24
ipvar EXTERNAL_NET any

# Port variables
portvar HTTP_PORTS 80,443,8080,8443
portvar SSH_PORTS 22

# Rules
alert tcp $EXTERNAL_NET any -> $HOME_NET $SSH_PORTS (msg:"SSH Brute Force"; threshold:type both,track by_src,count 5,seconds 60; sid:1000001;)

alert tcp $EXTERNAL_NET any -> $HOME_NET $HTTP_PORTS (msg:"SQL Injection Attempt"; content:"union select"; nocase; sid:1000002;)
```

### Suricata IPS Configuration

```yaml
# suricata.yaml
default-rule-path: /etc/suricata/rules
rule-files:
  - local.rules
  - emerging-web.rules

vars:
  address-groups:
    HOME_NET: "[192.168.1.0/24]"
    EXTERNAL_NET: "!$HOME_NET"
  
  port-groups:
    HTTP_PORTS: "[80,443,8080,8443]"
    SSH_PORTS: "[22]"

detect-engine:
  - profile: balanced
  - custom-values:
      toclient-src: 3
      toserver-src: 3
```

## Network Monitoring

### Traffic Analysis

```python
# Network traffic monitoring with Python
import pcap
import dpkt

def analyze_packet(pkt):
    eth = dpkt.ethernet.Ethernet(pkt)
    
    if eth.type != dpkt.ethernet.ETH_TYPE_IP:
        return
    
    ip = eth.data
    if ip.p == dpkt.ip.IP_PROTO_TCP:
        tcp = ip.data
        print(f"TCP: {ip.src} -> {ip.dst}:{tcp.dport}")
    elif ip.p == dpkt.ip.IP_PROTO_UDP:
        udp = ip.data
        print(f"UDP: {ip.src} -> {ip.dst}:{udp.dport}")

# Capture packets
pc = pcap.pcap()
pc.setfilter('tcp port 80')
for ts, pkt in pc:
    analyze_packet(pkt)
```

### Network Scanning Detection

```bash
#!/bin/bash
# Detect network scanning

# Monitor for port scans
netstat -an | grep SYN_RECV | wc -l

# Monitor for connection attempts
ss -tuln | grep LISTEN

# Monitor for unusual traffic patterns
tcpdump -i eth0 -n | grep -E "(SYN|FIN|RST)" | wc -l
```

## Wireless Security

### WPA3 Configuration

```bash
# WPA3 setup with hostapd
interface=wlan0
driver=nl80211
ssid=SecureNetwork
wpa=2
wpa_key_mgmt=WPA-PSK-SHA256
wpa_pairwise=CCMP
wpa_passphrase=StrongPassword123
rsn_pairwise=CCMP
```

### Wireless Monitoring

```bash
# Monitor wireless networks
airodump-ng wlan0

# Detect rogue access points
airodump-ng -c 6 --bssid 00:11:22:33:44:55 wlan0

# Monitor for deauth attacks
airodump-ng -c 6 --bssid 00:11:22:33:44:55 -w capture wlan0
```

## Network Segmentation

### VLAN Configuration

```bash
# Cisco switch VLAN config
vlan 10
 name Management
vlan 20
 name Servers
vlan 30
 name Users

# Access port configuration
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10
```

### Micro-segmentation

```yaml
# Kubernetes Network Policy
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: web-to-db-policy
spec:
  podSelector:
    matchLabels:
      app: web
  policyTypes:
  - Egress
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: database
    ports:
    - protocol: TCP
      port: 5432
```

## Network Access Control (NAC)

### 802.1X Authentication

```bash
# FreeRADIUS configuration
# /etc/freeradius/3.0/users
"user1" Cleartext-Password := "password123"
    Reply-Message := "Hello, %{User-Name}"

# EAP-TLS configuration
eap {
    default_eap_type = tls
    tls {
        private_key_password = "radius123"
        private_key_file = /etc/freeradius/3.0/certs/server.key
        certificate_file = /etc/freeradius/3.0/certs/server.crt
    }
}
```

### Port Security

```bash
# Switch port security
interface FastEthernet0/1
 switchport mode access
 switchport port-security
 switchport port-security maximum 2
 switchport port-security violation restrict
 switchport port-security mac-address sticky
```

## Incident Response

### Network Forensics

```bash
# Capture network traffic for analysis
tcpdump -i eth0 -w incident.pcap

# Analyze captured traffic
tshark -r incident.pcap -Y "http"

# Extract files from HTTP traffic
foremost -i incident.pcap -o extracted_files/
```

### Network Isolation

```bash
# Isolate compromised host
iptables -A INPUT -s 192.168.1.100 -j DROP
iptables -A OUTPUT -d 192.168.1.100 -j DROP

# Quarantine VLAN
vlan 99
 name Quarantine
```

## Security Tools

### Nmap for Network Security

```bash
# Comprehensive network scan
nmap -sS -sV -O -A target.com

# Vulnerability scanning
nmap --script vuln target.com

# Service enumeration
nmap -sV -sC target.com

# Firewall detection
nmap -sA target.com
```

### Wireshark Analysis

```bash
# Filter HTTP traffic
http

# Filter by IP
ip.addr == 192.168.1.1

# Filter by port
tcp.port == 80

# Filter by protocol
tcp.flags.syn == 1
```

## Best Practices

### Network Security Checklist

```bash
#!/bin/bash
# Network security checklist

echo "=== Network Security Checklist ==="

# 1. Firewall configuration
echo "Checking firewall rules..."
iptables -L -n

# 2. Open ports
echo "Checking open ports..."
netstat -tuln

# 3. Network services
echo "Checking running services..."
systemctl list-units --type=service --state=running

# 4. Network interfaces
echo "Checking network interfaces..."
ip addr show

# 5. Routing table
echo "Checking routing table..."
ip route show
```

### Monitoring and Alerting

```python
# Network monitoring script
import psutil
import smtplib
from email.mime.text import MIMEText

def check_network_health():
    # Check network connections
    connections = psutil.net_connections()
    
    # Check for suspicious connections
    suspicious_ports = [23, 135, 139, 445, 3389]
    for conn in connections:
        if conn.laddr.port in suspicious_ports:
            send_alert(f"Suspicious connection on port {conn.laddr.port}")
    
    # Check bandwidth usage
    net_io = psutil.net_io_counters()
    if net_io.bytes_sent > 1000000000:  # 1GB
        send_alert("High bandwidth usage detected")

def send_alert(message):
    # Send email alert
    msg = MIMEText(message)
    msg['Subject'] = 'Network Security Alert'
    msg['From'] = 'security@company.com'
    msg['To'] = 'admin@company.com'
    
    # Send email (implement SMTP logic)
    pass
```

## Career Opportunities

### Network Security Roles

- **Network Security Engineer**: Thiết kế và triển khai bảo mật mạng
- **Network Administrator**: Quản lý và bảo trì mạng
- **Security Analyst**: Phân tích và giám sát bảo mật mạng
- **Penetration Tester**: Kiểm tra bảo mật mạng
- **Incident Responder**: Xử lý sự cố bảo mật mạng

### Certifications

- **CCNA Security**: Cisco Certified Network Associate Security
- **CCNP Security**: Cisco Certified Network Professional Security
- **CompTIA Network+**: Network fundamentals
- **CISSP**: Certified Information Systems Security Professional
- **CISM**: Certified Information Security Manager

## Kết luận

Network Security là nền tảng quan trọng của cybersecurity. Việc hiểu và thực hành các kỹ thuật bảo mật mạng sẽ giúp bạn trở thành một chuyên gia bảo mật toàn diện.

Những kiến thức trên sẽ giúp bạn:

- Hiểu được các mối đe dọa mạng
- Triển khai các biện pháp bảo vệ hiệu quả
- Giám sát và phát hiện các hoạt động bất thường
- Xử lý sự cố bảo mật mạng

Hãy thực hành thường xuyên và cập nhật kiến thức mới nhất về network security!

---

*Bài viết được viết bởi Huỳnh Anh Khoa - Sinh viên HUTECH, chuyên ngành An ninh mạng*
