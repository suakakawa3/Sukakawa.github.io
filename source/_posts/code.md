---
title: code
date: 2026-02-05 14:22:31
tags:
---
### 0x2f
###不空格为注释，空格为标准字
### linux 高频使用命令笔记 
### system Info 系统信息

``` bash
	lsb_release -a
```
### ❯ lsb_release -a
### -------------
	LSB Version:    n/a
	Distributor ID: Fedora
	Description:    Fedora Linux 43 (Workstation Edition)
	Release:        43
	Codename:       n/a

### Fastfetch原为Neofetch已停止维护 所以使用FastFetch替代
``` bash
        yum install fastfetch
        fastfetch
```

### ❯ fastfetch
### root@Fedora43
### -------------
	OS: Fedora Linux 43 (Workstation Edition) x86_64
	Host: VMware Virtual Platform
	Kernel: Linux 6.18.12-200.fc43.x86_64
	Uptime: 36 mins
	Packages: 2037 (rpm), 4 (flatpak)
	Shell: zsh 5.9
	Display (Virtual-1): 1920x1080, 60 Hz
	Terminal: /dev/pts/1 10.0p2
	CPU: 4 x Intel(R) Core(TM) i5-10200H (8) @ 2.40 GHz
	GPU: VMware SVGA II Adapter
	Memory: 1.40 GiB / 3.77 GiB (37%)
	Swap: 0 B / 3.77 GiB (0%)
	Disk (/): 12.72 GiB / 19.00 GiB (67%) - btrfs
	Local IP (ens160): 192.168.1.38/24

``` bash
	hostnamectl status
```

### ❯ hostnamectl status
### -------------
	Static hostname: Fedora43
	Icon name: computer-vm
	Chassis: vm ��
	Chassis Asset Tag: No Asset Tag
	Machine ID: 1fc4ca9e45164ce08ecc02a63e3fd16c
	Boot ID: 1b35af4842fc492180881be7f2c6f07a
	Product UUID: c0124d56-451e-5ca3-4fcf-76daa7580365
	AF_VSOCK CID: 718955794
	Virtualization: vmware
	Operating System: Fedora Linux 43 (Workstation Edition)
	CPE OS Name: cpe:/o:fedoraproject:fedora:43
	OS Support End: Wed 2026-12-02
	OS Support Remaining: 9month 1w 1d
	Kernel: Linux 6.18.12-200.fc43.x86_64
	Architecture: x86-64
	Hardware Vendor: VMware, Inc.
	Hardware Model: VMware Virtual Platform
	Hardware Serial: VMware-56 4d 12 c0 1e 45 a3 5c-4f cf 76 da a7 58 03 65
	Hardware Version: None
	Firmware Version: 6.00
	Firmware Date: Thu 2020-11-12
	Firmware Age: 5y 3month 1w 3d

``` bash
        ls -ld /usr/src/kernels/*
```

###	❯ ls -ld /usr/src/kernels/*
### -------------
	drwxr-xr-x. 1 root root 404  2月21日 12:30 /usr/src/kernels/6.18.12-200.fc43.x86_64
	drwxr-xr-x. 1 root root 404  2月21日 12:31 /usr/src/kernels/6.18.8-200.fc43.x86_64
	drwxr-xr-x. 1 root root 404  2月21日 12:31 /usr/src/kernels/6.18.9-200.fc43.x86_64

``` bash
	uname -a
```

###	❯ uname -a
### -------------
	Linux Fedora43 6.18.12-200.fc43.x86_64 #1 SMP PREEMPT_DYNAMIC Mon Feb 16 18:58:26 UTC 2026 x86_64 GNU/Linux

### 仅查看内核Kernel信息
``` bash
	uname -srm
```
###	❯ uname -srm
### -------------
	Linux 6.18.12-200.fc43.x86_64 x86_64

``` bash
	cat /proc/version
```
###	❯ cat /proc/version
### -------------
	Linux version 6.18.12-200.fc43.x86_64 
	(mockbuild@53c9dc84bd7c460fb40cc5d15480f0a1)
	(gcc (GCC) 15.2.1 20260123 (Red Hat 15.2.1-7), 
	GNU ld version 2.45.1-4.fc43)
	#1 SMP PREEMPT_DYNAMIC Mon Feb 16 18:58:26 UTC 2026

``` bash
	sudo dmesg | grep Linux
```

###	❯ sudo dmesg | grep Linux
### -------------
	[    0.000000] Linux version 6.18.12-200.fc43.x86_64 (mockbuild@53c9dc84bd7c460fb40cc5d15480f0a1) 
	(gcc (GCC) 15.2.1 20260123 (Red Hat 15.2.1-7), 
	GNU ld version 2.45.1-4.fc43) 
	#1 SMP PREEMPT_DYNAMIC Mon Feb 16 18:58:26 UTC 2026
	[    0.635024] SELinux:  Initializing.
	[    0.744271] ACPI: [Firmware Bug]: BIOS _OSI(Linux) query ignored
	[    1.105268] pps_core: LinuxPPS API ver. 1 registered
	[    1.294387] Linux agpgart interface v0.103
	[    4.416905] SELinux:  Permission firmware_load in class system not defined in policy.
	[    4.416909] SELinux:  Permission kexec_image_load in class system not defined in policy.
	[    4.416910] SELinux:  Permission kexec_initramfs_load in class system not defined in policy.
	[    4.416911] SELinux:  Permission policy_load in class system not defined in policy.
	[    4.416911] SELinux:  Permission x509_certificate_load in class system not defined in policy.
	[    4.416954] SELinux:  Permission allowed in class io_uring not defined in policy.
	[    4.416955] SELinux: the above unknown classes and permissions will be allowed
	[    4.419854] SELinux:  policy capability network_peer_controls=1
	[    4.419856] SELinux:  policy capability open_perms=1
	[    4.419857] SELinux:  policy capability extended_socket_class=1
	[    4.419857] SELinux:  policy capability always_check_network=0
	[    4.419858] SELinux:  policy capability cgroup_seclabel=1
	[    4.419858] SELinux:  policy capability nnp_nosuid_transition=1
	[    4.419859] SELinux:  policy capability genfs_seclabel_symlinks=1
	[    4.419860] SELinux:  policy capability ioctl_skip_cloexec=0
	[    4.419860] SELinux:  policy capability userspace_initial_context=0
	[    4.419861] SELinux:  policy capability netlink_xperm=0
	[    4.419861] SELinux:  policy capability netif_wildcard=0
	[    4.419862] SELinux:  policy capability genfs_seclabel_wildcard=0
	[    4.419862] SELinux:  policy capability functionfs_seclabel=0
	[    4.462323] systemd[1]: Successfully loaded SELinux policy in 77.749ms.
``` bash
	cat /etc/os-release
```
### ❯ cat /etc/os-release
### -------------
	NAME="Fedora Linux"
	VERSION="43 (Workstation Edition)"
	RELEASE_TYPE=stable
	ID=fedora
	VERSION_ID=43
	VERSION_CODENAME=""
	PRETTY_NAME="Fedora Linux 43 (Workstation Edition)"
	ANSI_COLOR="0;38;2;60;110;180"
	LOGO=fedora-logo-icon
	CPE_NAME="cpe:/o:fedoraproject:fedora:43"
	DEFAULT_HOSTNAME="fedora"
	HOME_URL="https://fedoraproject.org/"
	DOCUMENTATION_URL="https://docs.fedoraproject.org/en-US/fedora/f43/"
	SUPPORT_URL="https://ask.fedoraproject.org/"
	BUG_REPORT_URL="https://bugzilla.redhat.com/"
	REDHAT_BUGZILLA_PRODUCT="Fedora"
	REDHAT_BUGZILLA_PRODUCT_VERSION=43
	REDHAT_SUPPORT_PRODUCT="Fedora"
	REDHAT_SUPPORT_PRODUCT_VERSION=43
	SUPPORT_END=2026-12-02
	VARIANT="Workstation Edition"
	VARIANT_ID=workstation
``` bash
	ls /boot
```
### ❯ ls /boot
### -------------
	config-6.18.12-200.fc43.x86_64                           symvers-6.18.12-200.fc43.x86_64.xz
	config-6.18.8-200.fc43.x86_64                            symvers-6.18.8-200.fc43.x86_64.xz
	config-6.18.9-200.fc43.x86_64                            symvers-6.18.9-200.fc43.x86_64.xz
	efi                                                      System.map-6.18.12-200.fc43.x86_64
	grub2                                                    System.map-6.18.8-200.fc43.x86_64
	initramfs-0-rescue-1fc4ca9e45164ce08ecc02a63e3fd16c.img  System.map-6.18.9-200.fc43.x86_64
	initramfs-6.18.12-200.fc43.x86_64.img                    vmlinuz-0-rescue-1fc4ca9e45164ce08ecc02a63e3fd16c
	initramfs-6.18.8-200.fc43.x86_64.img                     vmlinuz-6.18.12-200.fc43.x86_64
	initramfs-6.18.9-200.fc43.x86_64.img                     vmlinuz-6.18.8-200.fc43.x86_64
	loader                                                   vmlinuz-6.18.9-200.fc43.x86_64
	lost+found
