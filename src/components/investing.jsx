import Link from "next/link"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import InteractiveTreemap from '@/components/Treemap'

export function Component() {

    const data = {
    "name": "Root",
    "children": [
        {
            "name": "AMD",
            "children": [
                {
                    "name": "AMD",
                    "value": 559
                }
            ]
        },
        {
            "name": "AMEC",
            "children": [
                {
                    "name": "AMEC",
                    "value": 0
                }
            ]
        },
        {
            "name": "ASE Group",
            "children": [
                {
                    "name": "ASE Group",
                    "value": 0
                }
            ]
        },
        {
            "name": "ASM International",
            "children": [
                {
                    "name": "ASM International",
                    "value": 0
                }
            ]
        },
        {
            "name": "ASML",
            "children": [
                {
                    "name": "ASML",
                    "value": 647
                }
            ]
        },
        {
            "name": "ASUS",
            "children": [
                {
                    "name": "ASUS",
                    "value": 0
                }
            ]
        },
        {
            "name": "Adevinta",
            "children": [
                {
                    "name": "Adevinta",
                    "value": 0
                }
            ]
        },
        {
            "name": "Adobe",
            "children": [
                {
                    "name": "Adobe",
                    "value": 490
                }
            ]
        },
        {
            "name": "Advantech",
            "children": [
                {
                    "name": "Advantech",
                    "value": 0
                }
            ]
        },
        {
            "name": "Advantest",
            "children": [
                {
                    "name": "Advantest",
                    "value": 0
                }
            ]
        },
        {
            "name": "Adyen",
            "children": [
                {
                    "name": "Adyen",
                    "value": 0
                }
            ]
        },
        {
            "name": "Airbnb",
            "children": [
                {
                    "name": "Airbnb",
                    "value": 406
                }
            ]
        },
        {
            "name": "Akamai",
            "children": [
                {
                    "name": "Akamai",
                    "value": 0
                }
            ]
        },
        {
            "name": "Alchip Technologies",
            "children": [
                {
                    "name": "Alchip Technologies",
                    "value": 0
                }
            ]
        },
        {
            "name": "Alibaba",
            "children": [
                {
                    "name": "Alibaba",
                    "value": 468
                }
            ]
        },
        {
            "name": "Alibaba Health Information Technology",
            "children": [
                {
                    "name": "Alibaba Health Information Technology",
                    "value": 0
                }
            ]
        },
        {
            "name": "Align Technology",
            "children": [
                {
                    "name": "Align Technology",
                    "value": 530
                }
            ]
        },
        {
            "name": "Allegro MicroSystems",
            "children": [
                {
                    "name": "Allegro MicroSystems",
                    "value": 0
                }
            ]
        },
        {
            "name": "Allegro.eu",
            "children": [
                {
                    "name": "Allegro.eu",
                    "value": 60
                }
            ]
        },
        {
            "name": "Altair Engineering",
            "children": [
                {
                    "name": "Altair Engineering",
                    "value": 0
                }
            ]
        },
        {
            "name": "Amadeus IT Group",
            "children": [
                {
                    "name": "Amadeus IT Group",
                    "value": 0
                }
            ]
        },
        {
            "name": "Amazon",
            "children": [
                {
                    "name": "Amazon",
                    "value": 332
                }
            ]
        },
        {
            "name": "Amdocs",
            "children": [
                {
                    "name": "Amdocs",
                    "value": 0
                }
            ]
        },
        {
            "name": "Analog Devices",
            "children": [
                {
                    "name": "Analog Devices",
                    "value": 453
                }
            ]
        },
        {
            "name": "Ansys",
            "children": [
                {
                    "name": "Ansys",
                    "value": 738
                }
            ]
        },
        {
            "name": "AppLovin",
            "children": [
                {
                    "name": "AppLovin",
                    "value": 590
                }
            ]
        },
        {
            "name": "Apple",
            "children": [
                {
                    "name": "Apple",
                    "value": 515
                }
            ]
        },
        {
            "name": "Applied Materials",
            "children": [
                {
                    "name": "Applied Materials",
                    "value": 429
                }
            ]
        },
        {
            "name": "Arista Networks",
            "children": [
                {
                    "name": "Arista Networks",
                    "value": 580
                }
            ]
        },
        {
            "name": "Arm Holdings",
            "children": [
                {
                    "name": "Arm Holdings",
                    "value": 516
                }
            ]
        },
        {
            "name": "AspenTech",
            "children": [
                {
                    "name": "AspenTech",
                    "value": 0
                }
            ]
        },
        {
            "name": "Atlassian",
            "children": [
                {
                    "name": "Atlassian",
                    "value": 498
                }
            ]
        },
        {
            "name": "Aurora Innovation",
            "children": [
                {
                    "name": "Aurora Innovation",
                    "value": 0
                }
            ]
        },
        {
            "name": "Autodesk",
            "children": [
                {
                    "name": "Autodesk",
                    "value": 599
                }
            ]
        },
        {
            "name": "Automatic Data Processing",
            "children": [
                {
                    "name": "Automatic Data Processing",
                    "value": 351
                }
            ]
        },
        {
            "name": "BE Semiconductor",
            "children": [
                {
                    "name": "BE Semiconductor",
                    "value": 0
                }
            ]
        },
        {
            "name": "Baidu",
            "children": [
                {
                    "name": "Baidu",
                    "value": 0
                }
            ]
        },
        {
            "name": "Bandai Namco",
            "children": [
                {
                    "name": "Bandai Namco",
                    "value": 0
                }
            ]
        },
        {
            "name": "Bentley Systems",
            "children": [
                {
                    "name": "Bentley Systems",
                    "value": 0
                }
            ]
        },
        {
            "name": "Block",
            "children": [
                {
                    "name": "Block",
                    "value": 172
                }
            ]
        },
        {
            "name": "Booking.com",
            "children": [
                {
                    "name": "Booking.com",
                    "value": 408
                }
            ]
        },
        {
            "name": "Braze",
            "children": [
                {
                    "name": "Braze",
                    "value": 0
                }
            ]
        },
        {
            "name": "Broadcom",
            "children": [
                {
                    "name": "Broadcom",
                    "value": 458
                }
            ]
        },
        {
            "name": "CCC Intelligent Solutions",
            "children": [
                {
                    "name": "CCC Intelligent Solutions",
                    "value": 578
                }
            ]
        },
        {
            "name": "Cadence Design Systems",
            "children": [
                {
                    "name": "Cadence Design Systems",
                    "value": 444
                }
            ]
        },
        {
            "name": "Canon",
            "children": [
                {
                    "name": "Canon",
                    "value": 0
                }
            ]
        },
        {
            "name": "Carsales",
            "children": [
                {
                    "name": "Carsales",
                    "value": 0
                }
            ]
        },
        {
            "name": "Ceridian",
            "children": [
                {
                    "name": "Ceridian",
                    "value": 0
                }
            ]
        },
        {
            "name": "Check Point Software",
            "children": [
                {
                    "name": "Check Point Software",
                    "value": 0
                }
            ]
        },
        {
            "name": "Chewy",
            "children": [
                {
                    "name": "Chewy",
                    "value": 0
                }
            ]
        },
        {
            "name": "Cisco",
            "children": [
                {
                    "name": "Cisco",
                    "value": 540
                }
            ]
        },
        {
            "name": "Clarivate",
            "children": [
                {
                    "name": "Clarivate",
                    "value": 0
                }
            ]
        },
        {
            "name": "Clearwater Analytics",
            "children": [
                {
                    "name": "Clearwater Analytics",
                    "value": 0
                }
            ]
        },
        {
            "name": "Cloudflare",
            "children": [
                {
                    "name": "Cloudflare",
                    "value": 0
                }
            ]
        },
        {
            "name": "CoStar Group",
            "children": [
                {
                    "name": "CoStar Group",
                    "value": 0
                }
            ]
        },
        {
            "name": "Coherent",
            "children": [
                {
                    "name": "Coherent",
                    "value": 648
                }
            ]
        },
        {
            "name": "Coinbase",
            "children": [
                {
                    "name": "Coinbase",
                    "value": 0
                }
            ]
        },
        {
            "name": "Confluent",
            "children": [
                {
                    "name": "Confluent",
                    "value": 0
                }
            ]
        },
        {
            "name": "Constellation Software",
            "children": [
                {
                    "name": "Constellation Software",
                    "value": 426
                }
            ]
        },
        {
            "name": "Coupang",
            "children": [
                {
                    "name": "Coupang",
                    "value": 0
                }
            ]
        },
        {
            "name": "CrowdStrike",
            "children": [
                {
                    "name": "CrowdStrike",
                    "value": 699
                }
            ]
        },
        {
            "name": "CyberArk",
            "children": [
                {
                    "name": "CyberArk",
                    "value": 0
                }
            ]
        },
        {
            "name": "Dassault Syst\u00e8mes",
            "children": [
                {
                    "name": "Dassault Syst\u00e8mes",
                    "value": 619
                }
            ]
        },
        {
            "name": "Datadog",
            "children": [
                {
                    "name": "Datadog",
                    "value": 0
                }
            ]
        },
        {
            "name": "Delivery Hero",
            "children": [
                {
                    "name": "Delivery Hero",
                    "value": 234
                }
            ]
        },
        {
            "name": "Dell",
            "children": [
                {
                    "name": "Dell",
                    "value": 451
                }
            ]
        },
        {
            "name": "Delta Electronics",
            "children": [
                {
                    "name": "Delta Electronics",
                    "value": 0
                }
            ]
        },
        {
            "name": "Delta Electronics",
            "children": [
                {
                    "name": "Delta Electronics",
                    "value": 0
                }
            ]
        },
        {
            "name": "Descartes Systems",
            "children": [
                {
                    "name": "Descartes Systems",
                    "value": 0
                }
            ]
        },
        {
            "name": "DiDi",
            "children": [
                {
                    "name": "DiDi",
                    "value": 0
                }
            ]
        },
        {
            "name": "Disco Corp.",
            "children": [
                {
                    "name": "Disco Corp.",
                    "value": 0
                }
            ]
        },
        {
            "name": "DocuSign",
            "children": [
                {
                    "name": "DocuSign",
                    "value": 0
                }
            ]
        },
        {
            "name": "DoorDash",
            "children": [
                {
                    "name": "DoorDash",
                    "value": 0
                }
            ]
        },
        {
            "name": "DoubleVerify",
            "children": [
                {
                    "name": "DoubleVerify",
                    "value": 0
                }
            ]
        },
        {
            "name": "Dropbox",
            "children": [
                {
                    "name": "Dropbox",
                    "value": 0
                }
            ]
        },
        {
            "name": "Dynatrace",
            "children": [
                {
                    "name": "Dynatrace",
                    "value": 0
                }
            ]
        },
        {
            "name": "EPAM Systems",
            "children": [
                {
                    "name": "EPAM Systems",
                    "value": 0
                }
            ]
        },
        {
            "name": "Elastic NV",
            "children": [
                {
                    "name": "Elastic NV",
                    "value": 592
                }
            ]
        },
        {
            "name": "Electronic Arts",
            "children": [
                {
                    "name": "Electronic Arts",
                    "value": 468
                }
            ]
        },
        {
            "name": "Enphase Energy",
            "children": [
                {
                    "name": "Enphase Energy",
                    "value": 0
                }
            ]
        },
        {
            "name": "Entain",
            "children": [
                {
                    "name": "Entain",
                    "value": 0
                }
            ]
        },
        {
            "name": "Entegris",
            "children": [
                {
                    "name": "Entegris",
                    "value": 0
                }
            ]
        },
        {
            "name": "Equinix",
            "children": [
                {
                    "name": "Equinix",
                    "value": 599
                }
            ]
        },
        {
            "name": "Ericsson",
            "children": [
                {
                    "name": "Ericsson",
                    "value": 0
                }
            ]
        },
        {
            "name": "Etsy",
            "children": [
                {
                    "name": "Etsy",
                    "value": 493
                }
            ]
        },
        {
            "name": "Expedia Group",
            "children": [
                {
                    "name": "Expedia Group",
                    "value": 0
                }
            ]
        },
        {
            "name": "F5 Networks",
            "children": [
                {
                    "name": "F5 Networks",
                    "value": 0
                }
            ]
        },
        {
            "name": "FICO",
            "children": [
                {
                    "name": "FICO",
                    "value": 381
                }
            ]
        },
        {
            "name": "FactSet",
            "children": [
                {
                    "name": "FactSet",
                    "value": 0
                }
            ]
        },
        {
            "name": "Fidelity National Information Services",
            "children": [
                {
                    "name": "Fidelity National Information Services",
                    "value": 0
                }
            ]
        },
        {
            "name": "Fiserv",
            "children": [
                {
                    "name": "Fiserv",
                    "value": 424
                }
            ]
        },
        {
            "name": "Five9",
            "children": [
                {
                    "name": "Five9",
                    "value": 0
                }
            ]
        },
        {
            "name": "Fortinet",
            "children": [
                {
                    "name": "Fortinet",
                    "value": 559
                }
            ]
        },
        {
            "name": "Freshworks",
            "children": [
                {
                    "name": "Freshworks",
                    "value": 0
                }
            ]
        },
        {
            "name": "Futu Holdings",
            "children": [
                {
                    "name": "Futu Holdings",
                    "value": 0
                }
            ]
        },
        {
            "name": "Garena",
            "children": [
                {
                    "name": "Garena",
                    "value": 0
                }
            ]
        },
        {
            "name": "Garmin",
            "children": [
                {
                    "name": "Garmin",
                    "value": 0
                }
            ]
        },
        {
            "name": "Gen Digital",
            "children": [
                {
                    "name": "Gen Digital",
                    "value": 0
                }
            ]
        },
        {
            "name": "Genpact",
            "children": [
                {
                    "name": "Genpact",
                    "value": 0
                }
            ]
        },
        {
            "name": "GitLab",
            "children": [
                {
                    "name": "GitLab",
                    "value": 509
                }
            ]
        },
        {
            "name": "Global Payments",
            "children": [
                {
                    "name": "Global Payments",
                    "value": 0
                }
            ]
        },
        {
            "name": "Global Unichip Corp.",
            "children": [
                {
                    "name": "Global Unichip Corp.",
                    "value": 0
                }
            ]
        },
        {
            "name": "Global-e",
            "children": [
                {
                    "name": "Global-e",
                    "value": 0
                }
            ]
        },
        {
            "name": "GlobalFoundries",
            "children": [
                {
                    "name": "GlobalFoundries",
                    "value": 0
                }
            ]
        },
        {
            "name": "GlobalWafers",
            "children": [
                {
                    "name": "GlobalWafers",
                    "value": 0
                }
            ]
        },
        {
            "name": "Globant",
            "children": [
                {
                    "name": "Globant",
                    "value": 0
                }
            ]
        },
        {
            "name": "GoDaddy",
            "children": [
                {
                    "name": "GoDaddy",
                    "value": 0
                }
            ]
        },
        {
            "name": "GoTo",
            "children": [
                {
                    "name": "GoTo",
                    "value": 503
                }
            ]
        },
        {
            "name": "Google",
            "children": [
                {
                    "name": "Google",
                    "value": 421
                }
            ]
        },
        {
            "name": "Grab Holdings",
            "children": [
                {
                    "name": "Grab Holdings",
                    "value": 0
                }
            ]
        },
        {
            "name": "HP",
            "children": [
                {
                    "name": "HP",
                    "value": 0
                }
            ]
        },
        {
            "name": "Hewlett Packard Enterprise",
            "children": [
                {
                    "name": "Hewlett Packard Enterprise",
                    "value": 438
                }
            ]
        },
        {
            "name": "Hon Hai Precision Industry",
            "children": [
                {
                    "name": "Hon Hai Precision Industry",
                    "value": 442
                }
            ]
        },
        {
            "name": "HubSpot",
            "children": [
                {
                    "name": "HubSpot",
                    "value": 612
                }
            ]
        },
        {
            "name": "IBM",
            "children": [
                {
                    "name": "IBM",
                    "value": 559
                }
            ]
        },
        {
            "name": "IQVIA",
            "children": [
                {
                    "name": "IQVIA",
                    "value": 617
                }
            ]
        },
        {
            "name": "Infineon",
            "children": [
                {
                    "name": "Infineon",
                    "value": 649
                }
            ]
        },
        {
            "name": "Informatica",
            "children": [
                {
                    "name": "Informatica",
                    "value": 0
                }
            ]
        },
        {
            "name": "Instacart",
            "children": [
                {
                    "name": "Instacart",
                    "value": 0
                }
            ]
        },
        {
            "name": "Intel",
            "children": [
                {
                    "name": "Intel",
                    "value": 360
                }
            ]
        },
        {
            "name": "Intuit",
            "children": [
                {
                    "name": "Intuit",
                    "value": 359
                }
            ]
        },
        {
            "name": "JD Health",
            "children": [
                {
                    "name": "JD Health",
                    "value": 0
                }
            ]
        },
        {
            "name": "Jack Henry &amp; Associates",
            "children": [
                {
                    "name": "Jack Henry &amp; Associates",
                    "value": 0
                }
            ]
        },
        {
            "name": "Jingdong Mall",
            "children": [
                {
                    "name": "Jingdong Mall",
                    "value": 0
                }
            ]
        },
        {
            "name": "Juniper Networks",
            "children": [
                {
                    "name": "Juniper Networks",
                    "value": 0
                }
            ]
        },
        {
            "name": "KLA",
            "children": [
                {
                    "name": "KLA",
                    "value": 362
                }
            ]
        },
        {
            "name": "Kakao",
            "children": [
                {
                    "name": "Kakao",
                    "value": 0
                }
            ]
        },
        {
            "name": "Kaspi.kz Joint Stock Company",
            "children": [
                {
                    "name": "Kaspi.kz Joint Stock Company",
                    "value": 0
                }
            ]
        },
        {
            "name": "Keyence",
            "children": [
                {
                    "name": "Keyence",
                    "value": 677
                }
            ]
        },
        {
            "name": "Keysight",
            "children": [
                {
                    "name": "Keysight",
                    "value": 0
                }
            ]
        },
        {
            "name": "Klaviyo",
            "children": [
                {
                    "name": "Klaviyo",
                    "value": 0
                }
            ]
        },
        {
            "name": "Konami Holdings",
            "children": [
                {
                    "name": "Konami Holdings",
                    "value": 619
                }
            ]
        },
        {
            "name": "Krafton",
            "children": [
                {
                    "name": "Krafton",
                    "value": 0
                }
            ]
        },
        {
            "name": "Kuaishou Technology",
            "children": [
                {
                    "name": "Kuaishou Technology",
                    "value": 488
                }
            ]
        },
        {
            "name": "LG Electronics",
            "children": [
                {
                    "name": "LG Electronics",
                    "value": 676
                }
            ]
        },
        {
            "name": "Lam Research",
            "children": [
                {
                    "name": "Lam Research",
                    "value": 506
                }
            ]
        },
        {
            "name": "Lasertec",
            "children": [
                {
                    "name": "Lasertec",
                    "value": 0
                }
            ]
        },
        {
            "name": "Lattice Semiconductor",
            "children": [
                {
                    "name": "Lattice Semiconductor",
                    "value": 0
                }
            ]
        },
        {
            "name": "Leidos",
            "children": [
                {
                    "name": "Leidos",
                    "value": 0
                }
            ]
        },
        {
            "name": "Lenovo",
            "children": [
                {
                    "name": "Lenovo",
                    "value": 0
                }
            ]
        },
        {
            "name": "Logitech",
            "children": [
                {
                    "name": "Logitech",
                    "value": 0
                }
            ]
        },
        {
            "name": "Lyft",
            "children": [
                {
                    "name": "Lyft",
                    "value": 0
                }
            ]
        },
        {
            "name": "M3 Inc",
            "children": [
                {
                    "name": "M3 Inc",
                    "value": 0
                }
            ]
        },
        {
            "name": "MACOM",
            "children": [
                {
                    "name": "MACOM",
                    "value": 0
                }
            ]
        },
        {
            "name": "Manhattan Associates",
            "children": [
                {
                    "name": "Manhattan Associates",
                    "value": 0
                }
            ]
        },
        {
            "name": "Marvell Technology Group",
            "children": [
                {
                    "name": "Marvell Technology Group",
                    "value": 0
                }
            ]
        },
        {
            "name": "Match Group",
            "children": [
                {
                    "name": "Match Group",
                    "value": 0
                }
            ]
        },
        {
            "name": "MediaTek",
            "children": [
                {
                    "name": "MediaTek",
                    "value": 718
                }
            ]
        },
        {
            "name": "Meituan",
            "children": [
                {
                    "name": "Meituan",
                    "value": 458
                }
            ]
        },
        {
            "name": "MercadoLibre",
            "children": [
                {
                    "name": "MercadoLibre",
                    "value": 648
                }
            ]
        },
        {
            "name": "Meta",
            "children": [
                {
                    "name": "Meta",
                    "value": 259
                }
            ]
        },
        {
            "name": "MicroStrategy",
            "children": [
                {
                    "name": "MicroStrategy",
                    "value": 426
                }
            ]
        },
        {
            "name": "Microchip Technology",
            "children": [
                {
                    "name": "Microchip Technology",
                    "value": 542
                }
            ]
        },
        {
            "name": "Micron Technology",
            "children": [
                {
                    "name": "Micron Technology",
                    "value": 459
                }
            ]
        },
        {
            "name": "Microsoft",
            "children": [
                {
                    "name": "Microsoft",
                    "value": 564
                }
            ]
        },
        {
            "name": "Mobileye",
            "children": [
                {
                    "name": "Mobileye",
                    "value": 0
                }
            ]
        },
        {
            "name": "MongoDB",
            "children": [
                {
                    "name": "MongoDB",
                    "value": 543
                }
            ]
        },
        {
            "name": "Monolithic Power Systems",
            "children": [
                {
                    "name": "Monolithic Power Systems",
                    "value": 0
                }
            ]
        },
        {
            "name": "Monotaro",
            "children": [
                {
                    "name": "Monotaro",
                    "value": 0
                }
            ]
        },
        {
            "name": "Murata Seisakush",
            "children": [
                {
                    "name": "Murata Seisakush",
                    "value": 0
                }
            ]
        },
        {
            "name": "NEC Corp",
            "children": [
                {
                    "name": "NEC Corp",
                    "value": 0
                }
            ]
        },
        {
            "name": "NICE",
            "children": [
                {
                    "name": "NICE",
                    "value": 450
                }
            ]
        },
        {
            "name": "NVIDIA",
            "children": [
                {
                    "name": "NVIDIA",
                    "value": 699
                }
            ]
        },
        {
            "name": "NXP Semiconductors",
            "children": [
                {
                    "name": "NXP Semiconductors",
                    "value": 539
                }
            ]
        },
        {
            "name": "Nan Ya PCB",
            "children": [
                {
                    "name": "Nan Ya PCB",
                    "value": 0
                }
            ]
        },
        {
            "name": "Nanya Technology",
            "children": [
                {
                    "name": "Nanya Technology",
                    "value": 0
                }
            ]
        },
        {
            "name": "National Instruments",
            "children": [
                {
                    "name": "National Instruments",
                    "value": 0
                }
            ]
        },
        {
            "name": "Naver",
            "children": [
                {
                    "name": "Naver",
                    "value": 0
                }
            ]
        },
        {
            "name": "Nemetschek",
            "children": [
                {
                    "name": "Nemetschek",
                    "value": 700
                }
            ]
        },
        {
            "name": "NetApp",
            "children": [
                {
                    "name": "NetApp",
                    "value": 524
                }
            ]
        },
        {
            "name": "NetEase",
            "children": [
                {
                    "name": "NetEase",
                    "value": 420
                }
            ]
        },
        {
            "name": "Netflix",
            "children": [
                {
                    "name": "Netflix",
                    "value": 506
                }
            ]
        },
        {
            "name": "New Relic",
            "children": [
                {
                    "name": "New Relic",
                    "value": 0
                }
            ]
        },
        {
            "name": "Nexon",
            "children": [
                {
                    "name": "Nexon",
                    "value": 0
                }
            ]
        },
        {
            "name": "Nintendo",
            "children": [
                {
                    "name": "Nintendo",
                    "value": 556
                }
            ]
        },
        {
            "name": "Nokia",
            "children": [
                {
                    "name": "Nokia",
                    "value": 307
                }
            ]
        },
        {
            "name": "Novatek Microelectronics",
            "children": [
                {
                    "name": "Novatek Microelectronics",
                    "value": 0
                }
            ]
        },
        {
            "name": "Nutanix",
            "children": [
                {
                    "name": "Nutanix",
                    "value": 0
                }
            ]
        },
        {
            "name": "Nykaa",
            "children": [
                {
                    "name": "Nykaa",
                    "value": 416
                }
            ]
        },
        {
            "name": "ON Semiconductor",
            "children": [
                {
                    "name": "ON Semiconductor",
                    "value": 0
                }
            ]
        },
        {
            "name": "Ocado",
            "children": [
                {
                    "name": "Ocado",
                    "value": 0
                }
            ]
        },
        {
            "name": "Okta",
            "children": [
                {
                    "name": "Okta",
                    "value": 302
                }
            ]
        },
        {
            "name": "Onto Innovation",
            "children": [
                {
                    "name": "Onto Innovation",
                    "value": 0
                }
            ]
        },
        {
            "name": "OpenText",
            "children": [
                {
                    "name": "OpenText",
                    "value": 0
                }
            ]
        },
        {
            "name": "Oracle",
            "children": [
                {
                    "name": "Oracle",
                    "value": 578
                }
            ]
        },
        {
            "name": "Oracle Corp Japan",
            "children": [
                {
                    "name": "Oracle Corp Japan",
                    "value": 0
                }
            ]
        },
        {
            "name": "PTC",
            "children": [
                {
                    "name": "PTC",
                    "value": 0
                }
            ]
        },
        {
            "name": "Palantir",
            "children": [
                {
                    "name": "Palantir",
                    "value": 0
                }
            ]
        },
        {
            "name": "Palo Alto Networks",
            "children": [
                {
                    "name": "Palo Alto Networks",
                    "value": 654
                }
            ]
        },
        {
            "name": "Panasonic",
            "children": [
                {
                    "name": "Panasonic",
                    "value": 0
                }
            ]
        },
        {
            "name": "PayPal",
            "children": [
                {
                    "name": "PayPal",
                    "value": 301
                }
            ]
        },
        {
            "name": "Paycom",
            "children": [
                {
                    "name": "Paycom",
                    "value": 0
                }
            ]
        },
        {
            "name": "Paylocity",
            "children": [
                {
                    "name": "Paylocity",
                    "value": 0
                }
            ]
        },
        {
            "name": "Pinduoduo",
            "children": [
                {
                    "name": "Pinduoduo",
                    "value": 515
                }
            ]
        },
        {
            "name": "Procore",
            "children": [
                {
                    "name": "Procore",
                    "value": 0
                }
            ]
        },
        {
            "name": "Pure Storage",
            "children": [
                {
                    "name": "Pure Storage",
                    "value": 0
                }
            ]
        },
        {
            "name": "QUALCOMM",
            "children": [
                {
                    "name": "QUALCOMM",
                    "value": 653
                }
            ]
        },
        {
            "name": "Qorvo",
            "children": [
                {
                    "name": "Qorvo",
                    "value": 0
                }
            ]
        },
        {
            "name": "Qualys",
            "children": [
                {
                    "name": "Qualys",
                    "value": 0
                }
            ]
        },
        {
            "name": "Rakuten",
            "children": [
                {
                    "name": "Rakuten",
                    "value": 0
                }
            ]
        },
        {
            "name": "Realtek",
            "children": [
                {
                    "name": "Realtek",
                    "value": 0
                }
            ]
        },
        {
            "name": "Renesas Electronics",
            "children": [
                {
                    "name": "Renesas Electronics",
                    "value": 0
                }
            ]
        },
        {
            "name": "Robinhood",
            "children": [
                {
                    "name": "Robinhood",
                    "value": 0
                }
            ]
        },
        {
            "name": "Rohm",
            "children": [
                {
                    "name": "Rohm",
                    "value": 0
                }
            ]
        },
        {
            "name": "Roku",
            "children": [
                {
                    "name": "Roku",
                    "value": 0
                }
            ]
        },
        {
            "name": "Roper Technologies",
            "children": [
                {
                    "name": "Roper Technologies",
                    "value": 507
                }
            ]
        },
        {
            "name": "SAP",
            "children": [
                {
                    "name": "SAP",
                    "value": 523
                }
            ]
        },
        {
            "name": "SK Hynix",
            "children": [
                {
                    "name": "SK Hynix",
                    "value": 705
                }
            ]
        },
        {
            "name": "SMIC",
            "children": [
                {
                    "name": "SMIC",
                    "value": 304
                }
            ]
        },
        {
            "name": "SPS Commerce",
            "children": [
                {
                    "name": "SPS Commerce",
                    "value": 0
                }
            ]
        },
        {
            "name": "SS&C Technologies",
            "children": [
                {
                    "name": "SS&C Technologies",
                    "value": 0
                }
            ]
        },
        {
            "name": "STMicroelectronics",
            "children": [
                {
                    "name": "STMicroelectronics",
                    "value": 584
                }
            ]
        },
        {
            "name": "Sage Group",
            "children": [
                {
                    "name": "Sage Group",
                    "value": 0
                }
            ]
        },
        {
            "name": "Salesforce",
            "children": [
                {
                    "name": "Salesforce",
                    "value": 282
                }
            ]
        },
        {
            "name": "Samsara",
            "children": [
                {
                    "name": "Samsara",
                    "value": 0
                }
            ]
        },
        {
            "name": "Samsung",
            "children": [
                {
                    "name": "Samsung",
                    "value": 598
                }
            ]
        },
        {
            "name": "Schibsted",
            "children": [
                {
                    "name": "Schibsted",
                    "value": 0
                }
            ]
        },
        {
            "name": "Schneider Electric",
            "children": [
                {
                    "name": "Schneider Electric",
                    "value": 517
                }
            ]
        },
        {
            "name": "Seagate Technology",
            "children": [
                {
                    "name": "Seagate Technology",
                    "value": 0
                }
            ]
        },
        {
            "name": "SentinelOne",
            "children": [
                {
                    "name": "SentinelOne",
                    "value": 0
                }
            ]
        },
        {
            "name": "ServiceNow",
            "children": [
                {
                    "name": "ServiceNow",
                    "value": 682
                }
            ]
        },
        {
            "name": "Shopify",
            "children": [
                {
                    "name": "Shopify",
                    "value": 577
                }
            ]
        },
        {
            "name": "Skyworks Solutions",
            "children": [
                {
                    "name": "Skyworks Solutions",
                    "value": 461
                }
            ]
        },
        {
            "name": "Smartsheet",
            "children": [
                {
                    "name": "Smartsheet",
                    "value": 0
                }
            ]
        },
        {
            "name": "Snap",
            "children": [
                {
                    "name": "Snap",
                    "value": 0
                }
            ]
        },
        {
            "name": "Snowflake",
            "children": [
                {
                    "name": "Snowflake",
                    "value": 483
                }
            ]
        },
        {
            "name": "SoFi",
            "children": [
                {
                    "name": "SoFi",
                    "value": 0
                }
            ]
        },
        {
            "name": "Soitec",
            "children": [
                {
                    "name": "Soitec",
                    "value": 0
                }
            ]
        },
        {
            "name": "Sony",
            "children": [
                {
                    "name": "Sony",
                    "value": 613
                }
            ]
        },
        {
            "name": "Splunk",
            "children": [
                {
                    "name": "Splunk",
                    "value": 0
                }
            ]
        },
        {
            "name": "Spotify",
            "children": [
                {
                    "name": "Spotify",
                    "value": 418
                }
            ]
        },
        {
            "name": "Supermicro",
            "children": [
                {
                    "name": "Supermicro",
                    "value": 0
                }
            ]
        },
        {
            "name": "Symbotic",
            "children": [
                {
                    "name": "Symbotic",
                    "value": 0
                }
            ]
        },
        {
            "name": "Synopsys",
            "children": [
                {
                    "name": "Synopsys",
                    "value": 679
                }
            ]
        },
        {
            "name": "TE Connectivity",
            "children": [
                {
                    "name": "TE Connectivity",
                    "value": 0
                }
            ]
        },
        {
            "name": "TSMC",
            "children": [
                {
                    "name": "TSMC",
                    "value": 670
                }
            ]
        },
        {
            "name": "Take 2 Interactive",
            "children": [
                {
                    "name": "Take 2 Interactive",
                    "value": 474
                }
            ]
        },
        {
            "name": "Tata Elxsi",
            "children": [
                {
                    "name": "Tata Elxsi",
                    "value": 0
                }
            ]
        },
        {
            "name": "Technoprobe",
            "children": [
                {
                    "name": "Technoprobe",
                    "value": 0
                }
            ]
        },
        {
            "name": "Temenos",
            "children": [
                {
                    "name": "Temenos",
                    "value": 0
                }
            ]
        },
        {
            "name": "Tencent",
            "children": [
                {
                    "name": "Tencent",
                    "value": 377
                }
            ]
        },
        {
            "name": "Tesla",
            "children": [
                {
                    "name": "Tesla",
                    "value": 241
                }
            ]
        },
        {
            "name": "Texas Instruments",
            "children": [
                {
                    "name": "Texas Instruments",
                    "value": 355
                }
            ]
        },
        {
            "name": "The Trade Desk",
            "children": [
                {
                    "name": "The Trade Desk",
                    "value": 0
                }
            ]
        },
        {
            "name": "Toast",
            "children": [
                {
                    "name": "Toast",
                    "value": 0
                }
            ]
        },
        {
            "name": "Tokyo Electron",
            "children": [
                {
                    "name": "Tokyo Electron",
                    "value": 595
                }
            ]
        },
        {
            "name": "Topicus",
            "children": [
                {
                    "name": "Topicus",
                    "value": 0
                }
            ]
        },
        {
            "name": "Trend Micro",
            "children": [
                {
                    "name": "Trend Micro",
                    "value": 0
                }
            ]
        },
        {
            "name": "Trimble",
            "children": [
                {
                    "name": "Trimble",
                    "value": 0
                }
            ]
        },
        {
            "name": "Trip.com",
            "children": [
                {
                    "name": "Trip.com",
                    "value": 0
                }
            ]
        },
        {
            "name": "Twilio",
            "children": [
                {
                    "name": "Twilio",
                    "value": 0
                }
            ]
        },
        {
            "name": "Tyler Technologies",
            "children": [
                {
                    "name": "Tyler Technologies",
                    "value": 0
                }
            ]
        },
        {
            "name": "Uber",
            "children": [
                {
                    "name": "Uber",
                    "value": 322
                }
            ]
        },
        {
            "name": "UiPath",
            "children": [
                {
                    "name": "UiPath",
                    "value": 590
                }
            ]
        },
        {
            "name": "Unimicron",
            "children": [
                {
                    "name": "Unimicron",
                    "value": 0
                }
            ]
        },
        {
            "name": "United Microelectronics",
            "children": [
                {
                    "name": "United Microelectronics",
                    "value": 0
                }
            ]
        },
        {
            "name": "Unity Software",
            "children": [
                {
                    "name": "Unity Software",
                    "value": 0
                }
            ]
        },
        {
            "name": "Veeva Systems",
            "children": [
                {
                    "name": "Veeva Systems",
                    "value": 0
                }
            ]
        },
        {
            "name": "Vipshop",
            "children": [
                {
                    "name": "Vipshop",
                    "value": 0
                }
            ]
        },
        {
            "name": "Vmware",
            "children": [
                {
                    "name": "Vmware",
                    "value": 302
                }
            ]
        },
        {
            "name": "Wayfair",
            "children": [
                {
                    "name": "Wayfair",
                    "value": 0
                }
            ]
        },
        {
            "name": "WiseTech Global",
            "children": [
                {
                    "name": "WiseTech Global",
                    "value": 0
                }
            ]
        },
        {
            "name": "Wiwynn",
            "children": [
                {
                    "name": "Wiwynn",
                    "value": 360
                }
            ]
        },
        {
            "name": "Wix.com",
            "children": [
                {
                    "name": "Wix.com",
                    "value": 0
                }
            ]
        },
        {
            "name": "Wolfspeed",
            "children": [
                {
                    "name": "Wolfspeed",
                    "value": 0
                }
            ]
        },
        {
            "name": "Wolters Kluwer",
            "children": [
                {
                    "name": "Wolters Kluwer",
                    "value": 0
                }
            ]
        },
        {
            "name": "Workday",
            "children": [
                {
                    "name": "Workday",
                    "value": 620
                }
            ]
        },
        {
            "name": "Workiva",
            "children": [
                {
                    "name": "Workiva",
                    "value": 0
                }
            ]
        },
        {
            "name": "Xero",
            "children": [
                {
                    "name": "Xero",
                    "value": 584
                }
            ]
        },
        {
            "name": "Xiaomi",
            "children": [
                {
                    "name": "Xiaomi",
                    "value": 604
                }
            ]
        },
        {
            "name": "Yandex",
            "children": [
                {
                    "name": "Yandex",
                    "value": 0
                }
            ]
        },
        {
            "name": "Yonyou",
            "children": [
                {
                    "name": "Yonyou",
                    "value": 0
                }
            ]
        },
        {
            "name": "ZOZO",
            "children": [
                {
                    "name": "ZOZO",
                    "value": 0
                }
            ]
        },
        {
            "name": "Zalando",
            "children": [
                {
                    "name": "Zalando",
                    "value": 0
                }
            ]
        },
        {
            "name": "Zebra Technologies",
            "children": [
                {
                    "name": "Zebra Technologies",
                    "value": 0
                }
            ]
        },
        {
            "name": "Zillow",
            "children": [
                {
                    "name": "Zillow",
                    "value": 0
                }
            ]
        },
        {
            "name": "Zomato",
            "children": [
                {
                    "name": "Zomato",
                    "value": 299
                }
            ]
        },
        {
            "name": "Zoom",
            "children": [
                {
                    "name": "Zoom",
                    "value": 0
                }
            ]
        },
        {
            "name": "ZoomInfo",
            "children": [
                {
                    "name": "ZoomInfo",
                    "value": 0
                }
            ]
        },
        {
            "name": "Zscaler",
            "children": [
                {
                    "name": "Zscaler",
                    "value": 644
                }
            ]
        },
        {
            "name": "eBay",
            "children": [
                {
                    "name": "eBay",
                    "value": 0
                }
            ]
        },
        {
            "name": "eMemory Technology",
            "children": [
                {
                    "name": "eMemory Technology",
                    "value": 0
                }
            ]
        },
        {
            "name": "monday.com",
            "children": [
                {
                    "name": "monday.com",
                    "value": 0
                }
            ]
        }
    ]
}





    return (
        (<div className="bg-gray-900 min-h-screen flex flex-col">

            <header
                className="w-full flex flex-wrap justify-between items-center p-4 sticky top-0 bg-gray-900 z-50">
                <h1 className="text-4xl font-bold">David KAMGANG  </h1>
                <nav className="flex flex-wrap gap-4">
                    <Link className="text-lg font-medium hover:underline" href="./">
                        <InfoIcon className="w-4 h-4 text-blue-500" />
                        About
                    </Link>
                    <Link className="text-lg font-medium hover:underline" href="#">
                        <ProjectorIcon className="w-4 h-4 text-yellow-500" />
                        Projects
                    </Link>
                    <Link className="text-lg font-medium hover:underline" href="#">
                        <ActivityIcon className="w-4 h-4 text-green-500" />
                        Skills
                    </Link>
                    <Link className="text-lg font-medium hover:underline" href="#">
                        <SchoolIcon className="w-4 h-4 text-red-500" />
                        Students
                    </Link>
                    <Link className="text-lg font-medium hover:underline" href="#">
                        <ComputerIcon className="w-4 h-4 text-indigo-500" />
                        HPC
                    </Link>
                    <Link className="text-lg font-medium hover:underline" href="/investing">
                        <CurrencyIcon className="w-4 h-4 text-pink-500" />
                        Investing
                    </Link>
                    <Link className="text-lg font-medium hover:underline" href="#">
                        <ContactIcon className="w-4 h-4 text-cyan-500" />
                        Contact
                    </Link>
                </nav>
            </header>

            <main
                key="1"
                className="flex flex-col items-center justify-center p-4 bg-gray-900 text-white font-mono">



                <Card className="bg-gray-820 transform hover:scale-105 transition-transform duration-200 mr-auto">
                    <div className="h-full flex flex-col justify-center items-center text-center bg-opacity-60">
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                alt="David KAMGANG"
                                className="w-24 h-24 rounded-full"
                                height="100"
                                src="https://avatars.githubusercontent.com/u/75791840?v=4"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="100"
                            />
                            <div className="flex items-center space-x-4">
                                <a href="https://www.instagram.com/davidnintcheu/" rel="noopener noreferrer" target="_blank">
                                    <InstagramIcon className="w-6 h-6 text-white hover:scale-110 transition-transform duration-200" />
                                </a>
                                <a href="https://github.com/Flopsky" rel="noopener noreferrer" target="_blank">
                                    <GithubIcon className="w-6 h-6 text-white hover:scale-110 transition-transform duration-200" />
                                </a>
                                <a href="https://www.linkedin.com/in/dkamgang/" rel="noopener noreferrer" target="_blank">
                                    <LinkedinIcon className="w-6 h-6 text-white hover:scale-110 transition-transform duration-200" />
                                </a>
                                <a href="mailto:David%20Doe%20<davidkamgang84@gmail.com>" rel="noopener noreferrer" target="_blank">
                                    <MailIcon className="w-6 h-6 text-white hover:scale-110 transition-transform duration-200" />
                                </a>
                                <a href="#" rel="noopener noreferrer" target="_blank">
                                    <YoutubeIcon className="w-6 h-6 text-white hover:scale-110 transition-transform duration-200" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="bg-gray-800 transform hover:scale-105 transition-transform duration-200">
                    <CardHeader>
                        <h4 className="text-lg font-bold text-blue-500">
                            <ProjectorIcon className="w-4 h-4" />
                            Project Rocket
                        </h4>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-300">
                            This project goal is to provide dynamic dashboards on the state of stocks. It helps answer the question : should I hold or sell or buy ? LLM, GCP, Pandas, Streamlit, Chart Js, Github
                        </p>
                    </CardContent>
                </Card>

                <div >
                    <h1>The greener the better, The bigger the better. This leaderboard is updated every 24h</h1>
                    <InteractiveTreemap data={data} />
                </div>

                <div className="w-full min-h-screen flex flex-col">
                    <div className="flex-grow">

                    </div>

                    <section className="w-full flex flex-col items-center gap-8 p-4 mt-auto" id="contact">
                        <h3 className="text-2xl font-bold">Contact</h3>
                        <a href="mailto:David%20Doe%20<davidkamgang84@gmail.com>" rel="noopener noreferrer" target="_blank">
                            <Button
                                className="bg-blue-500 hover:bg-blue-700 w-full sm:w-auto"
                                variant="filled">
                                <MailIcon className="w-4 h-4" />
                                Contact Me
                            </Button>
                        </a>
                    </section>

                    <footer className="w-full flex justify-center items-center p-4 bg-gray-800">
                        <p className="text-sm text-gray-500">© David KAMGANG</p>
                    </footer>
                </div>

            </main>
        </div>)
    );
}


function InfoIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>)
    );
}


function ProjectorIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M5 7 3 5" />
            <path d="M9 6V3" />
            <path d="m13 7 2-2" />
            <circle cx="9" cy="13" r="3" />
            <path
                d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
            <path d="M16 16h2" />
        </svg>)
    );
}


function ActivityIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>)
    );
}


function SchoolIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m4 6 8-4 8 4" />
            <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
            <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
            <path d="M18 5v17" />
            <path d="M6 5v17" />
            <circle cx="12" cy="9" r="2" />
        </svg>)
    );
}


function ComputerIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="14" height="8" x="5" y="2" rx="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" />
            <path d="M6 18h2" />
            <path d="M12 18h6" />
        </svg>)
    );
}


function CurrencyIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="8" />
            <line x1="3" x2="6" y1="3" y2="6" />
            <line x1="21" x2="18" y1="3" y2="6" />
            <line x1="3" x2="6" y1="21" y2="18" />
            <line x1="21" x2="18" y1="21" y2="18" />
        </svg>)
    );
}


function ContactIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <circle cx="12" cy="10" r="2" />
            <line x1="8" x2="8" y1="2" y2="4" />
            <line x1="16" x2="16" y1="2" y2="4" />
        </svg>)
    );
}


function InstagramIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>)
    );
}


function GithubIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>)
    );
}


function LinkedinIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>)
    );
}


function MailIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>)
    );
}


function YoutubeIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
                d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>)
    );
}
