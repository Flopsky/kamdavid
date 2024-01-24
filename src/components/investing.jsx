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
                    "value": "632"
                }
            ]
        },
        {
            "name": "AMEC",
            "children": [
                {
                    "name": "AMEC",
                    "value": "559"
                }
            ]
        },
        {
            "name": "ASE Group",
            "children": [
                {
                    "name": "ASE Group",
                    "value": "637"
                }
            ]
        },
        {
            "name": "ASM International",
            "children": [
                {
                    "name": "ASM International",
                    "value": "617"
                }
            ]
        },
        {
            "name": "ASML",
            "children": [
                {
                    "name": "ASML",
                    "value": "508"
                }
            ]
        },
        {
            "name": "ASUS",
            "children": [
                {
                    "name": "ASUS",
                    "value": "626"
                }
            ]
        },
        {
            "name": "Adevinta",
            "children": [
                {
                    "name": "Adevinta",
                    "value": "642"
                }
            ]
        },
        {
            "name": "Adobe",
            "children": [
                {
                    "name": "Adobe",
                    "value": "515"
                }
            ]
        },
        {
            "name": "Advantech",
            "children": [
                {
                    "name": "Advantech",
                    "value": "639"
                }
            ]
        },
        {
            "name": "Advantest",
            "children": [
                {
                    "name": "Advantest",
                    "value": "645"
                }
            ]
        },
        {
            "name": "Adyen",
            "children": [
                {
                    "name": "Adyen",
                    "value": "470"
                }
            ]
        },
        {
            "name": "Airbnb",
            "children": [
                {
                    "name": "Airbnb",
                    "value": "454"
                }
            ]
        },
        {
            "name": "Akamai",
            "children": [
                {
                    "name": "Akamai",
                    "value": "559"
                }
            ]
        },
        {
            "name": "Alchip Technologies",
            "children": [
                {
                    "name": "Alchip Technologies",
                    "value": "331"
                }
            ]
        },
        {
            "name": "Alibaba",
            "children": [
                {
                    "name": "Alibaba",
                    "value": "289"
                }
            ]
        },
        {
            "name": "Alibaba Health Information Technology",
            "children": [
                {
                    "name": "Alibaba Health Information Technology",
                    "value": "323"
                }
            ]
        },
        {
            "name": "Align Technology",
            "children": [
                {
                    "name": "Align Technology",
                    "value": "389"
                }
            ]
        },
        {
            "name": "Allegro MicroSystems",
            "children": [
                {
                    "name": "Allegro MicroSystems",
                    "value": "517"
                }
            ]
        },
        {
            "name": "Allegro.eu",
            "children": [
                {
                    "name": "Allegro.eu",
                    "value": "74"
                }
            ]
        },
        {
            "name": "Altair Engineering",
            "children": [
                {
                    "name": "Altair Engineering",
                    "value": "670"
                }
            ]
        },
        {
            "name": "Amadeus IT Group",
            "children": [
                {
                    "name": "Amadeus IT Group",
                    "value": "607"
                }
            ]
        },
        {
            "name": "Amazon",
            "children": [
                {
                    "name": "Amazon",
                    "value": "457"
                }
            ]
        },
        {
            "name": "Amdocs",
            "children": [
                {
                    "name": "Amdocs",
                    "value": "611"
                }
            ]
        },
        {
            "name": "Analog Devices",
            "children": [
                {
                    "name": "Analog Devices",
                    "value": "470"
                }
            ]
        },
        {
            "name": "Ansys",
            "children": [
                {
                    "name": "Ansys",
                    "value": "726"
                }
            ]
        },
        {
            "name": "AppLovin",
            "children": [
                {
                    "name": "AppLovin",
                    "value": "623"
                }
            ]
        },
        {
            "name": "Apple",
            "children": [
                {
                    "name": "Apple",
                    "value": "409"
                }
            ]
        },
        {
            "name": "Applied Materials",
            "children": [
                {
                    "name": "Applied Materials",
                    "value": "414"
                }
            ]
        },
        {
            "name": "Arista Networks",
            "children": [
                {
                    "name": "Arista Networks",
                    "value": "535"
                }
            ]
        },
        {
            "name": "Arm Holdings",
            "children": [
                {
                    "name": "Arm Holdings",
                    "value": "501"
                }
            ]
        },
        {
            "name": "AspenTech",
            "children": [
                {
                    "name": "AspenTech",
                    "value": "621"
                }
            ]
        },
        {
            "name": "Atlassian",
            "children": [
                {
                    "name": "Atlassian",
                    "value": "465"
                }
            ]
        },
        {
            "name": "Aurora Innovation",
            "children": [
                {
                    "name": "Aurora Innovation",
                    "value": "548"
                }
            ]
        },
        {
            "name": "Autodesk",
            "children": [
                {
                    "name": "Autodesk",
                    "value": "546"
                }
            ]
        },
        {
            "name": "Automatic Data Processing",
            "children": [
                {
                    "name": "Automatic Data Processing",
                    "value": "341"
                }
            ]
        },
        {
            "name": "BE Semiconductor",
            "children": [
                {
                    "name": "BE Semiconductor",
                    "value": "303"
                }
            ]
        },
        {
            "name": "Baidu",
            "children": [
                {
                    "name": "Baidu",
                    "value": "415"
                }
            ]
        },
        {
            "name": "Bandai Namco",
            "children": [
                {
                    "name": "Bandai Namco",
                    "value": "643"
                }
            ]
        },
        {
            "name": "Bentley Systems",
            "children": [
                {
                    "name": "Bentley Systems",
                    "value": "587"
                }
            ]
        },
        {
            "name": "Block",
            "children": [
                {
                    "name": "Block",
                    "value": "289"
                }
            ]
        },
        {
            "name": "Booking.com",
            "children": [
                {
                    "name": "Booking.com",
                    "value": "456"
                }
            ]
        },
        {
            "name": "Braze",
            "children": [
                {
                    "name": "Braze",
                    "value": "517"
                }
            ]
        },
        {
            "name": "Broadcom",
            "children": [
                {
                    "name": "Broadcom",
                    "value": "532"
                }
            ]
        },
        {
            "name": "CCC Intelligent Solutions",
            "children": [
                {
                    "name": "CCC Intelligent Solutions",
                    "value": "553"
                }
            ]
        },
        {
            "name": "Cadence Design Systems",
            "children": [
                {
                    "name": "Cadence Design Systems",
                    "value": "429"
                }
            ]
        },
        {
            "name": "Canon",
            "children": [
                {
                    "name": "Canon",
                    "value": "453"
                }
            ]
        },
        {
            "name": "Carsales",
            "children": [
                {
                    "name": "Carsales",
                    "value": "570"
                }
            ]
        },
        {
            "name": "Ceridian",
            "children": [
                {
                    "name": "Ceridian",
                    "value": "541"
                }
            ]
        },
        {
            "name": "Check Point Software",
            "children": [
                {
                    "name": "Check Point Software",
                    "value": "694"
                }
            ]
        },
        {
            "name": "Chewy",
            "children": [
                {
                    "name": "Chewy",
                    "value": "418"
                }
            ]
        },
        {
            "name": "Cisco",
            "children": [
                {
                    "name": "Cisco",
                    "value": "520"
                }
            ]
        },
        {
            "name": "Clarivate",
            "children": [
                {
                    "name": "Clarivate",
                    "value": "593"
                }
            ]
        },
        {
            "name": "Clearwater Analytics",
            "children": [
                {
                    "name": "Clearwater Analytics",
                    "value": "577"
                }
            ]
        },
        {
            "name": "Cloudflare",
            "children": [
                {
                    "name": "Cloudflare",
                    "value": "478"
                }
            ]
        },
        {
            "name": "CoStar Group",
            "children": [
                {
                    "name": "CoStar Group",
                    "value": "469"
                }
            ]
        },
        {
            "name": "Coherent",
            "children": [
                {
                    "name": "Coherent",
                    "value": "640"
                }
            ]
        },
        {
            "name": "Coinbase",
            "children": [
                {
                    "name": "Coinbase",
                    "value": "251"
                }
            ]
        },
        {
            "name": "Confluent",
            "children": [
                {
                    "name": "Confluent",
                    "value": "589"
                }
            ]
        },
        {
            "name": "Constellation Software",
            "children": [
                {
                    "name": "Constellation Software",
                    "value": "397"
                }
            ]
        },
        {
            "name": "Coupang",
            "children": [
                {
                    "name": "Coupang",
                    "value": "532"
                }
            ]
        },
        {
            "name": "CrowdStrike",
            "children": [
                {
                    "name": "CrowdStrike",
                    "value": "714"
                }
            ]
        },
        {
            "name": "CyberArk",
            "children": [
                {
                    "name": "CyberArk",
                    "value": "613"
                }
            ]
        },
        {
            "name": "Dassault Syst\u00e8mes",
            "children": [
                {
                    "name": "Dassault Syst\u00e8mes",
                    "value": "660"
                }
            ]
        },
        {
            "name": "Datadog",
            "children": [
                {
                    "name": "Datadog",
                    "value": "641"
                }
            ]
        },
        {
            "name": "Delivery Hero",
            "children": [
                {
                    "name": "Delivery Hero",
                    "value": "322"
                }
            ]
        },
        {
            "name": "Dell",
            "children": [
                {
                    "name": "Dell",
                    "value": "523"
                }
            ]
        },
        {
            "name": "Delta Electronics",
            "children": [
                {
                    "name": "Delta Electronics",
                    "value": "704"
                }
            ]
        },
        {
            "name": "Delta Electronics",
            "children": [
                {
                    "name": "Delta Electronics",
                    "value": "694"
                }
            ]
        },
        {
            "name": "Descartes Systems",
            "children": [
                {
                    "name": "Descartes Systems",
                    "value": "536"
                }
            ]
        },
        {
            "name": "DiDi",
            "children": [
                {
                    "name": "DiDi",
                    "value": "464"
                }
            ]
        },
        {
            "name": "Disco Corp.",
            "children": [
                {
                    "name": "Disco Corp.",
                    "value": "332"
                }
            ]
        },
        {
            "name": "DocuSign",
            "children": [
                {
                    "name": "DocuSign",
                    "value": "559"
                }
            ]
        },
        {
            "name": "DoorDash",
            "children": [
                {
                    "name": "DoorDash",
                    "value": "423"
                }
            ]
        },
        {
            "name": "DoubleVerify",
            "children": [
                {
                    "name": "DoubleVerify",
                    "value": "605"
                }
            ]
        },
        {
            "name": "Dropbox",
            "children": [
                {
                    "name": "Dropbox",
                    "value": "312"
                }
            ]
        },
        {
            "name": "Dynatrace",
            "children": [
                {
                    "name": "Dynatrace",
                    "value": "650"
                }
            ]
        },
        {
            "name": "EPAM Systems",
            "children": [
                {
                    "name": "EPAM Systems",
                    "value": "604"
                }
            ]
        },
        {
            "name": "Elastic NV",
            "children": [
                {
                    "name": "Elastic NV",
                    "value": "620"
                }
            ]
        },
        {
            "name": "Electronic Arts",
            "children": [
                {
                    "name": "Electronic Arts",
                    "value": "427"
                }
            ]
        },
        {
            "name": "Enphase Energy",
            "children": [
                {
                    "name": "Enphase Energy",
                    "value": "505"
                }
            ]
        },
        {
            "name": "Entain",
            "children": [
                {
                    "name": "Entain",
                    "value": "336"
                }
            ]
        },
        {
            "name": "Entegris",
            "children": [
                {
                    "name": "Entegris",
                    "value": "565"
                }
            ]
        },
        {
            "name": "Entreprise",
            "children": [
                {
                    "name": "Entreprise",
                    "value": "Up"
                }
            ]
        },
        {
            "name": "Equinix",
            "children": [
                {
                    "name": "Equinix",
                    "value": "593"
                }
            ]
        },
        {
            "name": "Ericsson",
            "children": [
                {
                    "name": "Ericsson",
                    "value": "338"
                }
            ]
        },
        {
            "name": "Etsy",
            "children": [
                {
                    "name": "Etsy",
                    "value": "346"
                }
            ]
        },
        {
            "name": "Expedia Group",
            "children": [
                {
                    "name": "Expedia Group",
                    "value": "468"
                }
            ]
        },
        {
            "name": "F5 Networks",
            "children": [
                {
                    "name": "F5 Networks",
                    "value": "427"
                }
            ]
        },
        {
            "name": "FICO",
            "children": [
                {
                    "name": "FICO",
                    "value": "290"
                }
            ]
        },
        {
            "name": "FactSet",
            "children": [
                {
                    "name": "FactSet",
                    "value": "488"
                }
            ]
        },
        {
            "name": "Fidelity National Information Services",
            "children": [
                {
                    "name": "Fidelity National Information Services",
                    "value": "277"
                }
            ]
        },
        {
            "name": "Fiserv",
            "children": [
                {
                    "name": "Fiserv",
                    "value": "394"
                }
            ]
        },
        {
            "name": "Five9",
            "children": [
                {
                    "name": "Five9",
                    "value": "584"
                }
            ]
        },
        {
            "name": "Fortinet",
            "children": [
                {
                    "name": "Fortinet",
                    "value": "533"
                }
            ]
        },
        {
            "name": "Freshworks",
            "children": [
                {
                    "name": "Freshworks",
                    "value": "541"
                }
            ]
        },
        {
            "name": "Futu Holdings",
            "children": [
                {
                    "name": "Futu Holdings",
                    "value": "474"
                }
            ]
        },
        {
            "name": "Garena",
            "children": [
                {
                    "name": "Garena",
                    "value": "555"
                }
            ]
        },
        {
            "name": "Garmin",
            "children": [
                {
                    "name": "Garmin",
                    "value": "606"
                }
            ]
        },
        {
            "name": "Gen Digital",
            "children": [
                {
                    "name": "Gen Digital",
                    "value": "520"
                }
            ]
        },
        {
            "name": "Genpact",
            "children": [
                {
                    "name": "Genpact",
                    "value": "565"
                }
            ]
        },
        {
            "name": "GitLab",
            "children": [
                {
                    "name": "GitLab",
                    "value": "580"
                }
            ]
        },
        {
            "name": "Global Payments",
            "children": [
                {
                    "name": "Global Payments",
                    "value": "531"
                }
            ]
        },
        {
            "name": "Global Unichip Corp.",
            "children": [
                {
                    "name": "Global Unichip Corp.",
                    "value": "178"
                }
            ]
        },
        {
            "name": "Global-e",
            "children": [
                {
                    "name": "Global-e",
                    "value": "666"
                }
            ]
        },
        {
            "name": "GlobalFoundries",
            "children": [
                {
                    "name": "GlobalFoundries",
                    "value": "693"
                }
            ]
        },
        {
            "name": "GlobalWafers",
            "children": [
                {
                    "name": "GlobalWafers",
                    "value": "673"
                }
            ]
        },
        {
            "name": "Globant",
            "children": [
                {
                    "name": "Globant",
                    "value": "683"
                }
            ]
        },
        {
            "name": "GoDaddy",
            "children": [
                {
                    "name": "GoDaddy",
                    "value": "403"
                }
            ]
        },
        {
            "name": "GoTo",
            "children": [
                {
                    "name": "GoTo",
                    "value": "511"
                }
            ]
        },
        {
            "name": "Google",
            "children": [
                {
                    "name": "Google",
                    "value": "343"
                }
            ]
        },
        {
            "name": "Grab Holdings",
            "children": [
                {
                    "name": "Grab Holdings",
                    "value": "388"
                }
            ]
        },
        {
            "name": "HP",
            "children": [
                {
                    "name": "HP",
                    "value": "424"
                }
            ]
        },
        {
            "name": "Hewlett Packard Enterprise",
            "children": [
                {
                    "name": "Hewlett Packard Enterprise",
                    "value": "576"
                }
            ]
        },
        {
            "name": "Hon Hai Precision Industry",
            "children": [
                {
                    "name": "Hon Hai Precision Industry",
                    "value": "436"
                }
            ]
        },
        {
            "name": "HubSpot",
            "children": [
                {
                    "name": "HubSpot",
                    "value": "544"
                }
            ]
        },
        {
            "name": "IBM",
            "children": [
                {
                    "name": "IBM",
                    "value": "633"
                }
            ]
        },
        {
            "name": "IQVIA",
            "children": [
                {
                    "name": "IQVIA",
                    "value": "598"
                }
            ]
        },
        {
            "name": "Infineon",
            "children": [
                {
                    "name": "Infineon",
                    "value": "673"
                }
            ]
        },
        {
            "name": "Informatica",
            "children": [
                {
                    "name": "Informatica",
                    "value": "559"
                }
            ]
        },
        {
            "name": "Instacart",
            "children": [
                {
                    "name": "Instacart",
                    "value": "530"
                }
            ]
        },
        {
            "name": "Intel",
            "children": [
                {
                    "name": "Intel",
                    "value": "525"
                }
            ]
        },
        {
            "name": "Intuit",
            "children": [
                {
                    "name": "Intuit",
                    "value": "432"
                }
            ]
        },
        {
            "name": "JD Health",
            "children": [
                {
                    "name": "JD Health",
                    "value": "546"
                }
            ]
        },
        {
            "name": "Jack Henry &amp; Associates",
            "children": [
                {
                    "name": "Jack Henry &amp; Associates",
                    "value": "365"
                }
            ]
        },
        {
            "name": "Jingdong Mall",
            "children": [
                {
                    "name": "Jingdong Mall",
                    "value": "261"
                }
            ]
        },
        {
            "name": "Juniper Networks",
            "children": [
                {
                    "name": "Juniper Networks",
                    "value": "714"
                }
            ]
        },
        {
            "name": "KLA",
            "children": [
                {
                    "name": "KLA",
                    "value": "458"
                }
            ]
        },
        {
            "name": "Kakao",
            "children": [
                {
                    "name": "Kakao",
                    "value": "369"
                }
            ]
        },
        {
            "name": "Kaspi.kz Joint Stock Company",
            "children": [
                {
                    "name": "Kaspi.kz Joint Stock Company",
                    "value": "214"
                }
            ]
        },
        {
            "name": "Keyence",
            "children": [
                {
                    "name": "Keyence",
                    "value": "646"
                }
            ]
        },
        {
            "name": "Keysight",
            "children": [
                {
                    "name": "Keysight",
                    "value": "551"
                }
            ]
        },
        {
            "name": "Klaviyo",
            "children": [
                {
                    "name": "Klaviyo",
                    "value": "645"
                }
            ]
        },
        {
            "name": "Konami Holdings",
            "children": [
                {
                    "name": "Konami Holdings",
                    "value": "586"
                }
            ]
        },
        {
            "name": "Krafton",
            "children": [
                {
                    "name": "Krafton",
                    "value": "577"
                }
            ]
        },
        {
            "name": "Kuaishou Technology",
            "children": [
                {
                    "name": "Kuaishou Technology",
                    "value": "458"
                }
            ]
        },
        {
            "name": "LG Electronics",
            "children": [
                {
                    "name": "LG Electronics",
                    "value": "716"
                }
            ]
        },
        {
            "name": "Lam Research",
            "children": [
                {
                    "name": "Lam Research",
                    "value": "464"
                }
            ]
        },
        {
            "name": "Lasertec",
            "children": [
                {
                    "name": "Lasertec",
                    "value": "416"
                }
            ]
        },
        {
            "name": "Lattice Semiconductor",
            "children": [
                {
                    "name": "Lattice Semiconductor",
                    "value": "499"
                }
            ]
        },
        {
            "name": "Leidos",
            "children": [
                {
                    "name": "Leidos",
                    "value": "627"
                }
            ]
        },
        {
            "name": "Lenovo",
            "children": [
                {
                    "name": "Lenovo",
                    "value": "609"
                }
            ]
        },
        {
            "name": "Logitech",
            "children": [
                {
                    "name": "Logitech",
                    "value": "447"
                }
            ]
        },
        {
            "name": "Lyft",
            "children": [
                {
                    "name": "Lyft",
                    "value": "294"
                }
            ]
        },
        {
            "name": "M3 Inc",
            "children": [
                {
                    "name": "M3 Inc",
                    "value": "463"
                }
            ]
        },
        {
            "name": "MACOM",
            "children": [
                {
                    "name": "MACOM",
                    "value": "528"
                }
            ]
        },
        {
            "name": "Manhattan Associates",
            "children": [
                {
                    "name": "Manhattan Associates",
                    "value": "588"
                }
            ]
        },
        {
            "name": "Marvell Technology Group",
            "children": [
                {
                    "name": "Marvell Technology Group",
                    "value": "526"
                }
            ]
        },
        {
            "name": "Match Group",
            "children": [
                {
                    "name": "Match Group",
                    "value": "463"
                }
            ]
        },
        {
            "name": "MediaTek",
            "children": [
                {
                    "name": "MediaTek",
                    "value": "730"
                }
            ]
        },
        {
            "name": "Meituan",
            "children": [
                {
                    "name": "Meituan",
                    "value": "424"
                }
            ]
        },
        {
            "name": "MercadoLibre",
            "children": [
                {
                    "name": "MercadoLibre",
                    "value": "679"
                }
            ]
        },
        {
            "name": "Meta",
            "children": [
                {
                    "name": "Meta",
                    "value": "446"
                }
            ]
        },
        {
            "name": "MicroStrategy",
            "children": [
                {
                    "name": "MicroStrategy",
                    "value": "463"
                }
            ]
        },
        {
            "name": "Microchip Technology",
            "children": [
                {
                    "name": "Microchip Technology",
                    "value": "549"
                }
            ]
        },
        {
            "name": "Micron Technology",
            "children": [
                {
                    "name": "Micron Technology",
                    "value": "479"
                }
            ]
        },
        {
            "name": "Microsoft",
            "children": [
                {
                    "name": "Microsoft",
                    "value": "336"
                }
            ]
        },
        {
            "name": "Mobileye",
            "children": [
                {
                    "name": "Mobileye",
                    "value": "333"
                }
            ]
        },
        {
            "name": "MongoDB",
            "children": [
                {
                    "name": "MongoDB",
                    "value": "564"
                }
            ]
        },
        {
            "name": "Monolithic Power Systems",
            "children": [
                {
                    "name": "Monolithic Power Systems",
                    "value": "493"
                }
            ]
        },
        {
            "name": "Murata Seisakush",
            "children": [
                {
                    "name": "Murata Seisakush",
                    "value": "0"
                }
            ]
        },
        {
            "name": "NEC Corp",
            "children": [
                {
                    "name": "NEC Corp",
                    "value": "638"
                }
            ]
        },
        {
            "name": "NICE",
            "children": [
                {
                    "name": "NICE",
                    "value": "362"
                }
            ]
        },
        {
            "name": "NVIDIA",
            "children": [
                {
                    "name": "NVIDIA",
                    "value": "674"
                }
            ]
        },
        {
            "name": "NXP Semiconductors",
            "children": [
                {
                    "name": "NXP Semiconductors",
                    "value": "566"
                }
            ]
        },
        {
            "name": "Nanya Technology",
            "children": [
                {
                    "name": "Nanya Technology",
                    "value": "235"
                }
            ]
        },
        {
            "name": "National Instruments",
            "children": [
                {
                    "name": "National Instruments",
                    "value": "393"
                }
            ]
        },
        {
            "name": "Naver",
            "children": [
                {
                    "name": "Naver",
                    "value": "683"
                }
            ]
        },
        {
            "name": "Nemetschek",
            "children": [
                {
                    "name": "Nemetschek",
                    "value": "782"
                }
            ]
        },
        {
            "name": "NetApp",
            "children": [
                {
                    "name": "NetApp",
                    "value": "564"
                }
            ]
        },
        {
            "name": "NetEase",
            "children": [
                {
                    "name": "NetEase",
                    "value": "484"
                }
            ]
        },
        {
            "name": "Netflix",
            "children": [
                {
                    "name": "Netflix",
                    "value": "439"
                }
            ]
        },
        {
            "name": "New Relic",
            "children": [
                {
                    "name": "New Relic",
                    "value": "536"
                }
            ]
        },
        {
            "name": "Nexon",
            "children": [
                {
                    "name": "Nexon",
                    "value": "336"
                }
            ]
        },
        {
            "name": "Nintendo",
            "children": [
                {
                    "name": "Nintendo",
                    "value": "494"
                }
            ]
        },
        {
            "name": "Nokia",
            "children": [
                {
                    "name": "Nokia",
                    "value": "377"
                }
            ]
        },
        {
            "name": "Novatek Microelectronics",
            "children": [
                {
                    "name": "Novatek Microelectronics",
                    "value": "229"
                }
            ]
        },
        {
            "name": "Nutanix",
            "children": [
                {
                    "name": "Nutanix",
                    "value": "657"
                }
            ]
        },
        {
            "name": "Nykaa",
            "children": [
                {
                    "name": "Nykaa",
                    "value": "438"
                }
            ]
        },
        {
            "name": "ON Semiconductor",
            "children": [
                {
                    "name": "ON Semiconductor",
                    "value": "496"
                }
            ]
        },
        {
            "name": "Ocado",
            "children": [
                {
                    "name": "Ocado",
                    "value": "505"
                }
            ]
        },
        {
            "name": "Okta",
            "children": [
                {
                    "name": "Okta",
                    "value": "271"
                }
            ]
        },
        {
            "name": "Onto Innovation",
            "children": [
                {
                    "name": "Onto Innovation",
                    "value": "427"
                }
            ]
        },
        {
            "name": "OpenText",
            "children": [
                {
                    "name": "OpenText",
                    "value": "660"
                }
            ]
        },
        {
            "name": "Oracle",
            "children": [
                {
                    "name": "Oracle",
                    "value": "565"
                }
            ]
        },
        {
            "name": "Oracle Corp Japan",
            "children": [
                {
                    "name": "Oracle Corp Japan",
                    "value": "329"
                }
            ]
        },
        {
            "name": "PTC",
            "children": [
                {
                    "name": "PTC",
                    "value": "441"
                }
            ]
        },
        {
            "name": "Palantir",
            "children": [
                {
                    "name": "Palantir",
                    "value": "507"
                }
            ]
        },
        {
            "name": "Palo Alto Networks",
            "children": [
                {
                    "name": "Palo Alto Networks",
                    "value": "652"
                }
            ]
        },
        {
            "name": "Panasonic",
            "children": [
                {
                    "name": "Panasonic",
                    "value": "601"
                }
            ]
        },
        {
            "name": "PayPal",
            "children": [
                {
                    "name": "PayPal",
                    "value": "514"
                }
            ]
        },
        {
            "name": "Paycom",
            "children": [
                {
                    "name": "Paycom",
                    "value": "362"
                }
            ]
        },
        {
            "name": "Paylocity",
            "children": [
                {
                    "name": "Paylocity",
                    "value": "527"
                }
            ]
        },
        {
            "name": "Pinduoduo",
            "children": [
                {
                    "name": "Pinduoduo",
                    "value": "496"
                }
            ]
        },
        {
            "name": "Procore",
            "children": [
                {
                    "name": "Procore",
                    "value": "566"
                }
            ]
        },
        {
            "name": "Pure Storage",
            "children": [
                {
                    "name": "Pure Storage",
                    "value": "609"
                }
            ]
        },
        {
            "name": "QUALCOMM",
            "children": [
                {
                    "name": "QUALCOMM",
                    "value": "569"
                }
            ]
        },
        {
            "name": "Qorvo",
            "children": [
                {
                    "name": "Qorvo",
                    "value": "381"
                }
            ]
        },
        {
            "name": "Qualys",
            "children": [
                {
                    "name": "Qualys",
                    "value": "597"
                }
            ]
        },
        {
            "name": "Rakuten",
            "children": [
                {
                    "name": "Rakuten",
                    "value": "550"
                }
            ]
        },
        {
            "name": "Realtek",
            "children": [
                {
                    "name": "Realtek",
                    "value": "404"
                }
            ]
        },
        {
            "name": "Renesas Electronics",
            "children": [
                {
                    "name": "Renesas Electronics",
                    "value": "721"
                }
            ]
        },
        {
            "name": "Robinhood",
            "children": [
                {
                    "name": "Robinhood",
                    "value": "457"
                }
            ]
        },
        {
            "name": "Rohm",
            "children": [
                {
                    "name": "Rohm",
                    "value": "697"
                }
            ]
        },
        {
            "name": "Roku",
            "children": [
                {
                    "name": "Roku",
                    "value": "532"
                }
            ]
        },
        {
            "name": "Roper Technologies",
            "children": [
                {
                    "name": "Roper Technologies",
                    "value": "510"
                }
            ]
        },
        {
            "name": "SAP",
            "children": [
                {
                    "name": "SAP",
                    "value": "512"
                }
            ]
        },
        {
            "name": "SK Hynix",
            "children": [
                {
                    "name": "SK Hynix",
                    "value": "596"
                }
            ]
        },
        {
            "name": "SMIC",
            "children": [
                {
                    "name": "SMIC",
                    "value": "302"
                }
            ]
        },
        {
            "name": "SPS Commerce",
            "children": [
                {
                    "name": "SPS Commerce",
                    "value": "577"
                }
            ]
        },
        {
            "name": "SS&C Technologies",
            "children": [
                {
                    "name": "SS&C Technologies",
                    "value": "578"
                }
            ]
        },
        {
            "name": "STMicroelectronics",
            "children": [
                {
                    "name": "STMicroelectronics",
                    "value": "608"
                }
            ]
        },
        {
            "name": "Sage Group",
            "children": [
                {
                    "name": "Sage Group",
                    "value": "462"
                }
            ]
        },
        {
            "name": "Salesforce",
            "children": [
                {
                    "name": "Salesforce",
                    "value": "563"
                }
            ]
        },
        {
            "name": "Samsara",
            "children": [
                {
                    "name": "Samsara",
                    "value": "630"
                }
            ]
        },
        {
            "name": "Samsung",
            "children": [
                {
                    "name": "Samsung",
                    "value": "619"
                }
            ]
        },
        {
            "name": "Schibsted",
            "children": [
                {
                    "name": "Schibsted",
                    "value": "497"
                }
            ]
        },
        {
            "name": "Schneider Electric",
            "children": [
                {
                    "name": "Schneider Electric",
                    "value": "704"
                }
            ]
        },
        {
            "name": "Seagate Technology",
            "children": [
                {
                    "name": "Seagate Technology",
                    "value": "426"
                }
            ]
        },
        {
            "name": "SentinelOne",
            "children": [
                {
                    "name": "SentinelOne",
                    "value": "701"
                }
            ]
        },
        {
            "name": "ServiceNow",
            "children": [
                {
                    "name": "ServiceNow",
                    "value": "623"
                }
            ]
        },
        {
            "name": "Shopify",
            "children": [
                {
                    "name": "Shopify",
                    "value": "557"
                }
            ]
        },
        {
            "name": "Skyworks Solutions",
            "children": [
                {
                    "name": "Skyworks Solutions",
                    "value": "363"
                }
            ]
        },
        {
            "name": "Smartsheet",
            "children": [
                {
                    "name": "Smartsheet",
                    "value": "576"
                }
            ]
        },
        {
            "name": "Snap",
            "children": [
                {
                    "name": "Snap",
                    "value": "249"
                }
            ]
        },
        {
            "name": "Snowflake",
            "children": [
                {
                    "name": "Snowflake",
                    "value": "569"
                }
            ]
        },
        {
            "name": "SoFi",
            "children": [
                {
                    "name": "SoFi",
                    "value": "516"
                }
            ]
        },
        {
            "name": "Soitec",
            "children": [
                {
                    "name": "Soitec",
                    "value": "441"
                }
            ]
        },
        {
            "name": "Sony",
            "children": [
                {
                    "name": "Sony",
                    "value": "295"
                }
            ]
        },
        {
            "name": "Splunk",
            "children": [
                {
                    "name": "Splunk",
                    "value": "599"
                }
            ]
        },
        {
            "name": "Spotify",
            "children": [
                {
                    "name": "Spotify",
                    "value": "399"
                }
            ]
        },
        {
            "name": "Supermicro",
            "children": [
                {
                    "name": "Supermicro",
                    "value": "676"
                }
            ]
        },
        {
            "name": "Symbotic",
            "children": [
                {
                    "name": "Symbotic",
                    "value": "591"
                }
            ]
        },
        {
            "name": "Synopsys",
            "children": [
                {
                    "name": "Synopsys",
                    "value": "649"
                }
            ]
        },
        {
            "name": "TE Connectivity",
            "children": [
                {
                    "name": "TE Connectivity",
                    "value": "358"
                }
            ]
        },
        {
            "name": "TSMC",
            "children": [
                {
                    "name": "TSMC",
                    "value": "626"
                }
            ]
        },
        {
            "name": "Take 2 Interactive",
            "children": [
                {
                    "name": "Take 2 Interactive",
                    "value": "465"
                }
            ]
        },
        {
            "name": "Tata Elxsi",
            "children": [
                {
                    "name": "Tata Elxsi",
                    "value": "585"
                }
            ]
        },
        {
            "name": "Temenos",
            "children": [
                {
                    "name": "Temenos",
                    "value": "667"
                }
            ]
        },
        {
            "name": "Tencent",
            "children": [
                {
                    "name": "Tencent",
                    "value": "307"
                }
            ]
        },
        {
            "name": "Tesla",
            "children": [
                {
                    "name": "Tesla",
                    "value": "398"
                }
            ]
        },
        {
            "name": "Texas Instruments",
            "children": [
                {
                    "name": "Texas Instruments",
                    "value": "437"
                }
            ]
        },
        {
            "name": "The Trade Desk",
            "children": [
                {
                    "name": "The Trade Desk",
                    "value": "538"
                }
            ]
        },
        {
            "name": "Toast",
            "children": [
                {
                    "name": "Toast",
                    "value": "321"
                }
            ]
        },
        {
            "name": "Tokyo Electron",
            "children": [
                {
                    "name": "Tokyo Electron",
                    "value": "598"
                }
            ]
        },
        {
            "name": "Topicus",
            "children": [
                {
                    "name": "Topicus",
                    "value": "447"
                }
            ]
        },
        {
            "name": "Trend Micro",
            "children": [
                {
                    "name": "Trend Micro",
                    "value": "585"
                }
            ]
        },
        {
            "name": "Trimble",
            "children": [
                {
                    "name": "Trimble",
                    "value": "495"
                }
            ]
        },
        {
            "name": "Trip.com",
            "children": [
                {
                    "name": "Trip.com",
                    "value": "610"
                }
            ]
        },
        {
            "name": "Twilio",
            "children": [
                {
                    "name": "Twilio",
                    "value": "345"
                }
            ]
        },
        {
            "name": "Tyler Technologies",
            "children": [
                {
                    "name": "Tyler Technologies",
                    "value": "527"
                }
            ]
        },
        {
            "name": "Uber",
            "children": [
                {
                    "name": "Uber",
                    "value": "287"
                }
            ]
        },
        {
            "name": "UiPath",
            "children": [
                {
                    "name": "UiPath",
                    "value": "645"
                }
            ]
        },
        {
            "name": "Unimicron",
            "children": [
                {
                    "name": "Unimicron",
                    "value": "375"
                }
            ]
        },
        {
            "name": "United Microelectronics",
            "children": [
                {
                    "name": "United Microelectronics",
                    "value": "575"
                }
            ]
        },
        {
            "name": "Unity Software",
            "children": [
                {
                    "name": "Unity Software",
                    "value": "211"
                }
            ]
        },
        {
            "name": "Veeva Systems",
            "children": [
                {
                    "name": "Veeva Systems",
                    "value": "533"
                }
            ]
        },
        {
            "name": "Vipshop",
            "children": [
                {
                    "name": "Vipshop",
                    "value": "517"
                }
            ]
        },
        {
            "name": "Vmware",
            "children": [
                {
                    "name": "Vmware",
                    "value": "370"
                }
            ]
        },
        {
            "name": "Wayfair",
            "children": [
                {
                    "name": "Wayfair",
                    "value": "194"
                }
            ]
        },
        {
            "name": "WiseTech Global",
            "children": [
                {
                    "name": "WiseTech Global",
                    "value": "512"
                }
            ]
        },
        {
            "name": "Wiwynn",
            "children": [
                {
                    "name": "Wiwynn",
                    "value": "319"
                }
            ]
        },
        {
            "name": "Wix.com",
            "children": [
                {
                    "name": "Wix.com",
                    "value": "546"
                }
            ]
        },
        {
            "name": "Wolfspeed",
            "children": [
                {
                    "name": "Wolfspeed",
                    "value": "457"
                }
            ]
        },
        {
            "name": "Wolters Kluwer",
            "children": [
                {
                    "name": "Wolters Kluwer",
                    "value": "711"
                }
            ]
        },
        {
            "name": "Workday",
            "children": [
                {
                    "name": "Workday",
                    "value": "570"
                }
            ]
        },
        {
            "name": "Xero",
            "children": [
                {
                    "name": "Xero",
                    "value": "599"
                }
            ]
        },
        {
            "name": "Xiaomi",
            "children": [
                {
                    "name": "Xiaomi",
                    "value": "597"
                }
            ]
        },
        {
            "name": "Yandex",
            "children": [
                {
                    "name": "Yandex",
                    "value": "214"
                }
            ]
        },
        {
            "name": "Yonyou",
            "children": [
                {
                    "name": "Yonyou",
                    "value": "171"
                }
            ]
        },
        {
            "name": "ZOZO",
            "children": [
                {
                    "name": "ZOZO",
                    "value": "463"
                }
            ]
        },
        {
            "name": "Zalando",
            "children": [
                {
                    "name": "Zalando",
                    "value": "368"
                }
            ]
        },
        {
            "name": "Zebra Technologies",
            "children": [
                {
                    "name": "Zebra Technologies",
                    "value": "382"
                }
            ]
        },
        {
            "name": "Zillow",
            "children": [
                {
                    "name": "Zillow",
                    "value": "458"
                }
            ]
        },
        {
            "name": "Zomato",
            "children": [
                {
                    "name": "Zomato",
                    "value": "262"
                }
            ]
        },
        {
            "name": "Zoom",
            "children": [
                {
                    "name": "Zoom",
                    "value": "330"
                }
            ]
        },
        {
            "name": "ZoomInfo",
            "children": [
                {
                    "name": "ZoomInfo",
                    "value": "485"
                }
            ]
        },
        {
            "name": "Zscaler",
            "children": [
                {
                    "name": "Zscaler",
                    "value": "626"
                }
            ]
        },
        {
            "name": "eBay",
            "children": [
                {
                    "name": "eBay",
                    "value": "297"
                }
            ]
        },
        {
            "name": "eMemory Technology",
            "children": [
                {
                    "name": "eMemory Technology",
                    "value": "749"
                }
            ]
        },
        {
            "name": "monday.com",
            "children": [
                {
                    "name": "monday.com",
                    "value": "556"
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
                                src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYRwZoodMi6QSqQLpLLlvIrlX3AZmncXeI66kmAeKRCNMw263IHTKK5Fyt9FDgrr2PfKV7A5gQKB2cDIAtWaSkQnrwFfsA=w2160-h1337"
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
