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
                    "value": 644
                }
            ]
        },
        {
            "name": "AMEC",
            "children": [
                {
                    "name": "AMEC",
                    "value": 580
                }
            ]
        },
        {
            "name": "ASE Group",
            "children": [
                {
                    "name": "ASE Group",
                    "value": 605
                }
            ]
        },
        {
            "name": "ASM International",
            "children": [
                {
                    "name": "ASM International",
                    "value": 627
                }
            ]
        },
        {
            "name": "ASML",
            "children": [
                {
                    "name": "ASML",
                    "value": 724
                }
            ]
        },
        {
            "name": "ASUS",
            "children": [
                {
                    "name": "ASUS",
                    "value": 649
                }
            ]
        },
        {
            "name": "Adevinta",
            "children": [
                {
                    "name": "Adevinta",
                    "value": 653
                }
            ]
        },
        {
            "name": "Adobe",
            "children": [
                {
                    "name": "Adobe",
                    "value": 588
                }
            ]
        },
        {
            "name": "Advantech",
            "children": [
                {
                    "name": "Advantech",
                    "value": 655
                }
            ]
        },
        {
            "name": "Advantest",
            "children": [
                {
                    "name": "Advantest",
                    "value": 673
                }
            ]
        },
        {
            "name": "Adyen",
            "children": [
                {
                    "name": "Adyen",
                    "value": 478
                }
            ]
        },
        {
            "name": "Airbnb",
            "children": [
                {
                    "name": "Airbnb",
                    "value": 430
                }
            ]
        },
        {
            "name": "Aixtron",
            "children": [
                {
                    "name": "Aixtron",
                    "value": 384
                }
            ]
        },
        {
            "name": "Akamai",
            "children": [
                {
                    "name": "Akamai",
                    "value": 561
                }
            ]
        },
        {
            "name": "Alchip Technologies",
            "children": [
                {
                    "name": "Alchip Technologies",
                    "value": 338
                }
            ]
        },
        {
            "name": "Alibaba",
            "children": [
                {
                    "name": "Alibaba",
                    "value": 523
                }
            ]
        },
        {
            "name": "Alibaba Health Information Technology",
            "children": [
                {
                    "name": "Alibaba Health Information Technology",
                    "value": 272
                }
            ]
        },
        {
            "name": "Align Technology",
            "children": [
                {
                    "name": "Align Technology",
                    "value": 407
                }
            ]
        },
        {
            "name": "Allegro MicroSystems",
            "children": [
                {
                    "name": "Allegro MicroSystems",
                    "value": 555
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
                    "value": 685
                }
            ]
        },
        {
            "name": "Amadeus IT Group",
            "children": [
                {
                    "name": "Amadeus IT Group",
                    "value": 634
                }
            ]
        },
        {
            "name": "Amazon",
            "children": [
                {
                    "name": "Amazon",
                    "value": 362
                }
            ]
        },
        {
            "name": "Amdocs",
            "children": [
                {
                    "name": "Amdocs",
                    "value": 628
                }
            ]
        },
        {
            "name": "Analog Devices",
            "children": [
                {
                    "name": "Analog Devices",
                    "value": 509
                }
            ]
        },
        {
            "name": "Ansys",
            "children": [
                {
                    "name": "Ansys",
                    "value": 733
                }
            ]
        },
        {
            "name": "AppLovin",
            "children": [
                {
                    "name": "AppLovin",
                    "value": 617
                }
            ]
        },
        {
            "name": "Apple",
            "children": [
                {
                    "name": "Apple",
                    "value": 458
                }
            ]
        },
        {
            "name": "Applied Materials",
            "children": [
                {
                    "name": "Applied Materials",
                    "value": 414
                }
            ]
        },
        {
            "name": "Arista Networks",
            "children": [
                {
                    "name": "Arista Networks",
                    "value": 514
                }
            ]
        },
        {
            "name": "Arm Holdings",
            "children": [
                {
                    "name": "Arm Holdings",
                    "value": 544
                }
            ]
        },
        {
            "name": "AspenTech",
            "children": [
                {
                    "name": "AspenTech",
                    "value": 600
                }
            ]
        },
        {
            "name": "Atlassian",
            "children": [
                {
                    "name": "Atlassian",
                    "value": 466
                }
            ]
        },
        {
            "name": "Aurora Innovation",
            "children": [
                {
                    "name": "Aurora Innovation",
                    "value": 537
                }
            ]
        },
        {
            "name": "Autodesk",
            "children": [
                {
                    "name": "Autodesk",
                    "value": 538
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
                    "value": 345
                }
            ]
        },
        {
            "name": "Baidu",
            "children": [
                {
                    "name": "Baidu",
                    "value": 481
                }
            ]
        },
        {
            "name": "Bandai Namco",
            "children": [
                {
                    "name": "Bandai Namco",
                    "value": 640
                }
            ]
        },
        {
            "name": "Bentley Systems",
            "children": [
                {
                    "name": "Bentley Systems",
                    "value": 570
                }
            ]
        },
        {
            "name": "Bilibili",
            "children": [
                {
                    "name": "Bilibili",
                    "value": 382
                }
            ]
        },
        {
            "name": "Blackbaud",
            "children": [
                {
                    "name": "Blackbaud",
                    "value": 481
                }
            ]
        },
        {
            "name": "Block",
            "children": [
                {
                    "name": "Block",
                    "value": 257
                }
            ]
        },
        {
            "name": "Booking.com",
            "children": [
                {
                    "name": "Booking.com",
                    "value": 453
                }
            ]
        },
        {
            "name": "Braze",
            "children": [
                {
                    "name": "Braze",
                    "value": 535
                }
            ]
        },
        {
            "name": "Broadcom",
            "children": [
                {
                    "name": "Broadcom",
                    "value": 492
                }
            ]
        },
        {
            "name": "CCC Intelligent Solutions",
            "children": [
                {
                    "name": "CCC Intelligent Solutions",
                    "value": 561
                }
            ]
        },
        {
            "name": "Cadence Design Systems",
            "children": [
                {
                    "name": "Cadence Design Systems",
                    "value": 383
                }
            ]
        },
        {
            "name": "Canon",
            "children": [
                {
                    "name": "Canon",
                    "value": 496
                }
            ]
        },
        {
            "name": "Carsales",
            "children": [
                {
                    "name": "Carsales",
                    "value": 574
                }
            ]
        },
        {
            "name": "Ceridian",
            "children": [
                {
                    "name": "Ceridian",
                    "value": 545
                }
            ]
        },
        {
            "name": "Check Point Software",
            "children": [
                {
                    "name": "Check Point Software",
                    "value": 660
                }
            ]
        },
        {
            "name": "Chewy",
            "children": [
                {
                    "name": "Chewy",
                    "value": 439
                }
            ]
        },
        {
            "name": "Cisco",
            "children": [
                {
                    "name": "Cisco",
                    "value": 518
                }
            ]
        },
        {
            "name": "Clarivate",
            "children": [
                {
                    "name": "Clarivate",
                    "value": 661
                }
            ]
        },
        {
            "name": "Clearwater Analytics",
            "children": [
                {
                    "name": "Clearwater Analytics",
                    "value": 548
                }
            ]
        },
        {
            "name": "Cloudflare",
            "children": [
                {
                    "name": "Cloudflare",
                    "value": 490
                }
            ]
        },
        {
            "name": "CoStar Group",
            "children": [
                {
                    "name": "CoStar Group",
                    "value": 456
                }
            ]
        },
        {
            "name": "Coherent",
            "children": [
                {
                    "name": "Coherent",
                    "value": 620
                }
            ]
        },
        {
            "name": "Coinbase",
            "children": [
                {
                    "name": "Coinbase",
                    "value": 293
                }
            ]
        },
        {
            "name": "Confluent",
            "children": [
                {
                    "name": "Confluent",
                    "value": 595
                }
            ]
        },
        {
            "name": "Constellation Software",
            "children": [
                {
                    "name": "Constellation Software",
                    "value": 439
                }
            ]
        },
        {
            "name": "Coupang",
            "children": [
                {
                    "name": "Coupang",
                    "value": 531
                }
            ]
        },
        {
            "name": "CrowdStrike",
            "children": [
                {
                    "name": "CrowdStrike",
                    "value": 688
                }
            ]
        },
        {
            "name": "CyberArk",
            "children": [
                {
                    "name": "CyberArk",
                    "value": 686
                }
            ]
        },
        {
            "name": "Dassault Syst\u00e8mes",
            "children": [
                {
                    "name": "Dassault Syst\u00e8mes",
                    "value": 646
                }
            ]
        },
        {
            "name": "Datadog",
            "children": [
                {
                    "name": "Datadog",
                    "value": 608
                }
            ]
        },
        {
            "name": "Delivery Hero",
            "children": [
                {
                    "name": "Delivery Hero",
                    "value": 329
                }
            ]
        },
        {
            "name": "Dell",
            "children": [
                {
                    "name": "Dell",
                    "value": 519
                }
            ]
        },
        {
            "name": "Delta Electronics",
            "children": [
                {
                    "name": "Delta Electronics",
                    "value": 699
                }
            ]
        },
        {
            "name": "Delta Electronics",
            "children": [
                {
                    "name": "Delta Electronics",
                    "value": 697
                }
            ]
        },
        {
            "name": "Descartes Systems",
            "children": [
                {
                    "name": "Descartes Systems",
                    "value": 558
                }
            ]
        },
        {
            "name": "DiDi",
            "children": [
                {
                    "name": "DiDi",
                    "value": 406
                }
            ]
        },
        {
            "name": "Disco Corp.",
            "children": [
                {
                    "name": "Disco Corp.",
                    "value": 299
                }
            ]
        },
        {
            "name": "DocuSign",
            "children": [
                {
                    "name": "DocuSign",
                    "value": 544
                }
            ]
        },
        {
            "name": "DoorDash",
            "children": [
                {
                    "name": "DoorDash",
                    "value": 473
                }
            ]
        },
        {
            "name": "DoubleVerify",
            "children": [
                {
                    "name": "DoubleVerify",
                    "value": 592
                }
            ]
        },
        {
            "name": "Doximity",
            "children": [
                {
                    "name": "Doximity",
                    "value": 497
                }
            ]
        },
        {
            "name": "Dropbox",
            "children": [
                {
                    "name": "Dropbox",
                    "value": 354
                }
            ]
        },
        {
            "name": "Dynatrace",
            "children": [
                {
                    "name": "Dynatrace",
                    "value": 617
                }
            ]
        },
        {
            "name": "EPAM Systems",
            "children": [
                {
                    "name": "EPAM Systems",
                    "value": 583
                }
            ]
        },
        {
            "name": "Elastic NV",
            "children": [
                {
                    "name": "Elastic NV",
                    "value": 635
                }
            ]
        },
        {
            "name": "Electronic Arts",
            "children": [
                {
                    "name": "Electronic Arts",
                    "value": 419
                }
            ]
        },
        {
            "name": "Enphase Energy",
            "children": [
                {
                    "name": "Enphase Energy",
                    "value": 468
                }
            ]
        },
        {
            "name": "Entain",
            "children": [
                {
                    "name": "Entain",
                    "value": 335
                }
            ]
        },
        {
            "name": "Entegris",
            "children": [
                {
                    "name": "Entegris",
                    "value": 623
                }
            ]
        },
        {
            "name": "Equinix",
            "children": [
                {
                    "name": "Equinix",
                    "value": 598
                }
            ]
        },
        {
            "name": "Ericsson",
            "children": [
                {
                    "name": "Ericsson",
                    "value": 378
                }
            ]
        },
        {
            "name": "Etsy",
            "children": [
                {
                    "name": "Etsy",
                    "value": 451
                }
            ]
        },
        {
            "name": "Expedia Group",
            "children": [
                {
                    "name": "Expedia Group",
                    "value": 465
                }
            ]
        },
        {
            "name": "F5 Networks",
            "children": [
                {
                    "name": "F5 Networks",
                    "value": 443
                }
            ]
        },
        {
            "name": "FICO",
            "children": [
                {
                    "name": "FICO",
                    "value": 354
                }
            ]
        },
        {
            "name": "FactSet",
            "children": [
                {
                    "name": "FactSet",
                    "value": 461
                }
            ]
        },
        {
            "name": "Fidelity National Information Services",
            "children": [
                {
                    "name": "Fidelity National Information Services",
                    "value": 293
                }
            ]
        },
        {
            "name": "Fiserv",
            "children": [
                {
                    "name": "Fiserv",
                    "value": 360
                }
            ]
        },
        {
            "name": "Five9",
            "children": [
                {
                    "name": "Five9",
                    "value": 567
                }
            ]
        },
        {
            "name": "Fortinet",
            "children": [
                {
                    "name": "Fortinet",
                    "value": 576
                }
            ]
        },
        {
            "name": "Freshworks",
            "children": [
                {
                    "name": "Freshworks",
                    "value": 544
                }
            ]
        },
        {
            "name": "Futu Holdings",
            "children": [
                {
                    "name": "Futu Holdings",
                    "value": 474
                }
            ]
        },
        {
            "name": "Garena",
            "children": [
                {
                    "name": "Garena",
                    "value": 538
                }
            ]
        },
        {
            "name": "Garmin",
            "children": [
                {
                    "name": "Garmin",
                    "value": 637
                }
            ]
        },
        {
            "name": "Gen Digital",
            "children": [
                {
                    "name": "Gen Digital",
                    "value": 473
                }
            ]
        },
        {
            "name": "Genpact",
            "children": [
                {
                    "name": "Genpact",
                    "value": 583
                }
            ]
        },
        {
            "name": "GitLab",
            "children": [
                {
                    "name": "GitLab",
                    "value": 553
                }
            ]
        },
        {
            "name": "Global Payments",
            "children": [
                {
                    "name": "Global Payments",
                    "value": 497
                }
            ]
        },
        {
            "name": "Global Unichip Corp.",
            "children": [
                {
                    "name": "Global Unichip Corp.",
                    "value": 190
                }
            ]
        },
        {
            "name": "Global-e",
            "children": [
                {
                    "name": "Global-e",
                    "value": 693
                }
            ]
        },
        {
            "name": "GlobalFoundries",
            "children": [
                {
                    "name": "GlobalFoundries",
                    "value": 690
                }
            ]
        },
        {
            "name": "GlobalWafers",
            "children": [
                {
                    "name": "GlobalWafers",
                    "value": 675
                }
            ]
        },
        {
            "name": "Globant",
            "children": [
                {
                    "name": "Globant",
                    "value": 670
                }
            ]
        },
        {
            "name": "GoDaddy",
            "children": [
                {
                    "name": "GoDaddy",
                    "value": 349
                }
            ]
        },
        {
            "name": "GoTo",
            "children": [
                {
                    "name": "GoTo",
                    "value": 512
                }
            ]
        },
        {
            "name": "Google",
            "children": [
                {
                    "name": "Google",
                    "value": 495
                }
            ]
        },
        {
            "name": "Grab Holdings",
            "children": [
                {
                    "name": "Grab Holdings",
                    "value": 390
                }
            ]
        },
        {
            "name": "HP",
            "children": [
                {
                    "name": "HP",
                    "value": 330
                }
            ]
        },
        {
            "name": "Hewlett Packard Enterprise",
            "children": [
                {
                    "name": "Hewlett Packard Enterprise",
                    "value": 352
                }
            ]
        },
        {
            "name": "Hon Hai Precision Industry",
            "children": [
                {
                    "name": "Hon Hai Precision Industry",
                    "value": 431
                }
            ]
        },
        {
            "name": "HubSpot",
            "children": [
                {
                    "name": "HubSpot",
                    "value": 558
                }
            ]
        },
        {
            "name": "IBM",
            "children": [
                {
                    "name": "IBM",
                    "value": 635
                }
            ]
        },
        {
            "name": "IQVIA",
            "children": [
                {
                    "name": "IQVIA",
                    "value": 602
                }
            ]
        },
        {
            "name": "Infineon",
            "children": [
                {
                    "name": "Infineon",
                    "value": 639
                }
            ]
        },
        {
            "name": "Informatica",
            "children": [
                {
                    "name": "Informatica",
                    "value": 561
                }
            ]
        },
        {
            "name": "Instacart",
            "children": [
                {
                    "name": "Instacart",
                    "value": 492
                }
            ]
        },
        {
            "name": "Intel",
            "children": [
                {
                    "name": "Intel",
                    "value": 298
                }
            ]
        },
        {
            "name": "Intuit",
            "children": [
                {
                    "name": "Intuit",
                    "value": 312
                }
            ]
        },
        {
            "name": "JD Health",
            "children": [
                {
                    "name": "JD Health",
                    "value": 518
                }
            ]
        },
        {
            "name": "Jack Henry &amp; Associates",
            "children": [
                {
                    "name": "Jack Henry &amp; Associates",
                    "value": 398
                }
            ]
        },
        {
            "name": "Jingdong Mall",
            "children": [
                {
                    "name": "Jingdong Mall",
                    "value": 192
                }
            ]
        },
        {
            "name": "Juniper Networks",
            "children": [
                {
                    "name": "Juniper Networks",
                    "value": 699
                }
            ]
        },
        {
            "name": "KLA",
            "children": [
                {
                    "name": "KLA",
                    "value": 407
                }
            ]
        },
        {
            "name": "KPIT Technologies",
            "children": [
                {
                    "name": "KPIT Technologies",
                    "value": 491
                }
            ]
        },
        {
            "name": "Kakao",
            "children": [
                {
                    "name": "Kakao",
                    "value": 393
                }
            ]
        },
        {
            "name": "Kakao Pay",
            "children": [
                {
                    "name": "Kakao Pay",
                    "value": 401
                }
            ]
        },
        {
            "name": "Kaspi.kz Joint Stock Company",
            "children": [
                {
                    "name": "Kaspi.kz Joint Stock Company",
                    "value": 233
                }
            ]
        },
        {
            "name": "Keyence",
            "children": [
                {
                    "name": "Keyence",
                    "value": 673
                }
            ]
        },
        {
            "name": "Keysight",
            "children": [
                {
                    "name": "Keysight",
                    "value": 567
                }
            ]
        },
        {
            "name": "Klaviyo",
            "children": [
                {
                    "name": "Klaviyo",
                    "value": 648
                }
            ]
        },
        {
            "name": "Konami Holdings",
            "children": [
                {
                    "name": "Konami Holdings",
                    "value": 627
                }
            ]
        },
        {
            "name": "Krafton",
            "children": [
                {
                    "name": "Krafton",
                    "value": 578
                }
            ]
        },
        {
            "name": "Kuaishou Technology",
            "children": [
                {
                    "name": "Kuaishou Technology",
                    "value": 467
                }
            ]
        },
        {
            "name": "LG Electronics",
            "children": [
                {
                    "name": "LG Electronics",
                    "value": 648
                }
            ]
        },
        {
            "name": "Lam Research",
            "children": [
                {
                    "name": "Lam Research",
                    "value": 450
                }
            ]
        },
        {
            "name": "Lasertec",
            "children": [
                {
                    "name": "Lasertec",
                    "value": 428
                }
            ]
        },
        {
            "name": "Lattice Semiconductor",
            "children": [
                {
                    "name": "Lattice Semiconductor",
                    "value": 534
                }
            ]
        },
        {
            "name": "Leidos",
            "children": [
                {
                    "name": "Leidos",
                    "value": 624
                }
            ]
        },
        {
            "name": "Lenovo",
            "children": [
                {
                    "name": "Lenovo",
                    "value": 593
                }
            ]
        },
        {
            "name": "Logitech",
            "children": [
                {
                    "name": "Logitech",
                    "value": 518
                }
            ]
        },
        {
            "name": "Lyft",
            "children": [
                {
                    "name": "Lyft",
                    "value": 336
                }
            ]
        },
        {
            "name": "M3 Inc",
            "children": [
                {
                    "name": "M3 Inc",
                    "value": 473
                }
            ]
        },
        {
            "name": "MACOM",
            "children": [
                {
                    "name": "MACOM",
                    "value": 501
                }
            ]
        },
        {
            "name": "MakeMyTrip",
            "children": [
                {
                    "name": "MakeMyTrip",
                    "value": 538
                }
            ]
        },
        {
            "name": "Manhattan Associates",
            "children": [
                {
                    "name": "Manhattan Associates",
                    "value": 599
                }
            ]
        },
        {
            "name": "Marvell Technology Group",
            "children": [
                {
                    "name": "Marvell Technology Group",
                    "value": 554
                }
            ]
        },
        {
            "name": "Match Group",
            "children": [
                {
                    "name": "Match Group",
                    "value": 426
                }
            ]
        },
        {
            "name": "MediaTek",
            "children": [
                {
                    "name": "MediaTek",
                    "value": 757
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
                    "value": 657
                }
            ]
        },
        {
            "name": "Meta",
            "children": [
                {
                    "name": "Meta",
                    "value": 471
                }
            ]
        },
        {
            "name": "MicroStrategy",
            "children": [
                {
                    "name": "MicroStrategy",
                    "value": 421
                }
            ]
        },
        {
            "name": "Microchip Technology",
            "children": [
                {
                    "name": "Microchip Technology",
                    "value": 528
                }
            ]
        },
        {
            "name": "Micron Technology",
            "children": [
                {
                    "name": "Micron Technology",
                    "value": 501
                }
            ]
        },
        {
            "name": "Microsoft",
            "children": [
                {
                    "name": "Microsoft",
                    "value": 312
                }
            ]
        },
        {
            "name": "Mobileye",
            "children": [
                {
                    "name": "Mobileye",
                    "value": 441
                }
            ]
        },
        {
            "name": "MongoDB",
            "children": [
                {
                    "name": "MongoDB",
                    "value": 517
                }
            ]
        },
        {
            "name": "Monolithic Power Systems",
            "children": [
                {
                    "name": "Monolithic Power Systems",
                    "value": 509
                }
            ]
        },
        {
            "name": "Monotaro",
            "children": [
                {
                    "name": "Monotaro",
                    "value": 90
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
                    "value": 621
                }
            ]
        },
        {
            "name": "NICE",
            "children": [
                {
                    "name": "NICE",
                    "value": 405
                }
            ]
        },
        {
            "name": "NVIDIA",
            "children": [
                {
                    "name": "NVIDIA",
                    "value": 695
                }
            ]
        },
        {
            "name": "NXP Semiconductors",
            "children": [
                {
                    "name": "NXP Semiconductors",
                    "value": 506
                }
            ]
        },
        {
            "name": "Nan Ya PCB",
            "children": [
                {
                    "name": "Nan Ya PCB",
                    "value": 230
                }
            ]
        },
        {
            "name": "Nanya Technology",
            "children": [
                {
                    "name": "Nanya Technology",
                    "value": 231
                }
            ]
        },
        {
            "name": "National Instruments",
            "children": [
                {
                    "name": "National Instruments",
                    "value": 449
                }
            ]
        },
        {
            "name": "Naver",
            "children": [
                {
                    "name": "Naver",
                    "value": 661
                }
            ]
        },
        {
            "name": "Nemetschek",
            "children": [
                {
                    "name": "Nemetschek",
                    "value": 724
                }
            ]
        },
        {
            "name": "NetApp",
            "children": [
                {
                    "name": "NetApp",
                    "value": 518
                }
            ]
        },
        {
            "name": "NetEase",
            "children": [
                {
                    "name": "NetEase",
                    "value": 494
                }
            ]
        },
        {
            "name": "Netflix",
            "children": [
                {
                    "name": "Netflix",
                    "value": 416
                }
            ]
        },
        {
            "name": "New Relic",
            "children": [
                {
                    "name": "New Relic",
                    "value": 523
                }
            ]
        },
        {
            "name": "Nexon",
            "children": [
                {
                    "name": "Nexon",
                    "value": 346
                }
            ]
        },
        {
            "name": "Nintendo",
            "children": [
                {
                    "name": "Nintendo",
                    "value": 503
                }
            ]
        },
        {
            "name": "Nokia",
            "children": [
                {
                    "name": "Nokia",
                    "value": 345
                }
            ]
        },
        {
            "name": "Novatek Microelectronics",
            "children": [
                {
                    "name": "Novatek Microelectronics",
                    "value": 166
                }
            ]
        },
        {
            "name": "Nutanix",
            "children": [
                {
                    "name": "Nutanix",
                    "value": 649
                }
            ]
        },
        {
            "name": "Nykaa",
            "children": [
                {
                    "name": "Nykaa",
                    "value": 463
                }
            ]
        },
        {
            "name": "ON Semiconductor",
            "children": [
                {
                    "name": "ON Semiconductor",
                    "value": 518
                }
            ]
        },
        {
            "name": "Ocado",
            "children": [
                {
                    "name": "Ocado",
                    "value": 522
                }
            ]
        },
        {
            "name": "Okta",
            "children": [
                {
                    "name": "Okta",
                    "value": 229
                }
            ]
        },
        {
            "name": "Onto Innovation",
            "children": [
                {
                    "name": "Onto Innovation",
                    "value": 426
                }
            ]
        },
        {
            "name": "OpenText",
            "children": [
                {
                    "name": "OpenText",
                    "value": 642
                }
            ]
        },
        {
            "name": "Oracle",
            "children": [
                {
                    "name": "Oracle",
                    "value": 591
                }
            ]
        },
        {
            "name": "Oracle Corp Japan",
            "children": [
                {
                    "name": "Oracle Corp Japan",
                    "value": 283
                }
            ]
        },
        {
            "name": "PTC",
            "children": [
                {
                    "name": "PTC",
                    "value": 424
                }
            ]
        },
        {
            "name": "Palantir",
            "children": [
                {
                    "name": "Palantir",
                    "value": 517
                }
            ]
        },
        {
            "name": "Palo Alto Networks",
            "children": [
                {
                    "name": "Palo Alto Networks",
                    "value": 635
                }
            ]
        },
        {
            "name": "Panasonic",
            "children": [
                {
                    "name": "Panasonic",
                    "value": 579
                }
            ]
        },
        {
            "name": "PayPal",
            "children": [
                {
                    "name": "PayPal",
                    "value": 459
                }
            ]
        },
        {
            "name": "Paycom",
            "children": [
                {
                    "name": "Paycom",
                    "value": 366
                }
            ]
        },
        {
            "name": "Paylocity",
            "children": [
                {
                    "name": "Paylocity",
                    "value": 545
                }
            ]
        },
        {
            "name": "Pinduoduo",
            "children": [
                {
                    "name": "Pinduoduo",
                    "value": 487
                }
            ]
        },
        {
            "name": "Power Integrations",
            "children": [
                {
                    "name": "Power Integrations",
                    "value": 625
                }
            ]
        },
        {
            "name": "Procore",
            "children": [
                {
                    "name": "Procore",
                    "value": 581
                }
            ]
        },
        {
            "name": "Pure Storage",
            "children": [
                {
                    "name": "Pure Storage",
                    "value": 647
                }
            ]
        },
        {
            "name": "QUALCOMM",
            "children": [
                {
                    "name": "QUALCOMM",
                    "value": 655
                }
            ]
        },
        {
            "name": "Qorvo",
            "children": [
                {
                    "name": "Qorvo",
                    "value": 425
                }
            ]
        },
        {
            "name": "Qualys",
            "children": [
                {
                    "name": "Qualys",
                    "value": 609
                }
            ]
        },
        {
            "name": "Rakuten",
            "children": [
                {
                    "name": "Rakuten",
                    "value": 530
                }
            ]
        },
        {
            "name": "Realtek",
            "children": [
                {
                    "name": "Realtek",
                    "value": 446
                }
            ]
        },
        {
            "name": "Renesas Electronics",
            "children": [
                {
                    "name": "Renesas Electronics",
                    "value": 698
                }
            ]
        },
        {
            "name": "Robinhood",
            "children": [
                {
                    "name": "Robinhood",
                    "value": 446
                }
            ]
        },
        {
            "name": "Rohm",
            "children": [
                {
                    "name": "Rohm",
                    "value": 654
                }
            ]
        },
        {
            "name": "Roku",
            "children": [
                {
                    "name": "Roku",
                    "value": 578
                }
            ]
        },
        {
            "name": "Roper Technologies",
            "children": [
                {
                    "name": "Roper Technologies",
                    "value": 534
                }
            ]
        },
        {
            "name": "SAP",
            "children": [
                {
                    "name": "SAP",
                    "value": 484
                }
            ]
        },
        {
            "name": "SK Hynix",
            "children": [
                {
                    "name": "SK Hynix",
                    "value": 681
                }
            ]
        },
        {
            "name": "SMIC",
            "children": [
                {
                    "name": "SMIC",
                    "value": 299
                }
            ]
        },
        {
            "name": "SPS Commerce",
            "children": [
                {
                    "name": "SPS Commerce",
                    "value": 566
                }
            ]
        },
        {
            "name": "SS&C Technologies",
            "children": [
                {
                    "name": "SS&C Technologies",
                    "value": 559
                }
            ]
        },
        {
            "name": "STMicroelectronics",
            "children": [
                {
                    "name": "STMicroelectronics",
                    "value": 570
                }
            ]
        },
        {
            "name": "Sage Group",
            "children": [
                {
                    "name": "Sage Group",
                    "value": 458
                }
            ]
        },
        {
            "name": "Salesforce",
            "children": [
                {
                    "name": "Salesforce",
                    "value": 288
                }
            ]
        },
        {
            "name": "Samsara",
            "children": [
                {
                    "name": "Samsara",
                    "value": 631
                }
            ]
        },
        {
            "name": "Samsung",
            "children": [
                {
                    "name": "Samsung",
                    "value": 641
                }
            ]
        },
        {
            "name": "Schibsted",
            "children": [
                {
                    "name": "Schibsted",
                    "value": 239
                }
            ]
        },
        {
            "name": "Schneider Electric",
            "children": [
                {
                    "name": "Schneider Electric",
                    "value": 718
                }
            ]
        },
        {
            "name": "Seagate Technology",
            "children": [
                {
                    "name": "Seagate Technology",
                    "value": 458
                }
            ]
        },
        {
            "name": "SentinelOne",
            "children": [
                {
                    "name": "SentinelOne",
                    "value": 697
                }
            ]
        },
        {
            "name": "ServiceNow",
            "children": [
                {
                    "name": "ServiceNow",
                    "value": 668
                }
            ]
        },
        {
            "name": "Shopify",
            "children": [
                {
                    "name": "Shopify",
                    "value": 557
                }
            ]
        },
        {
            "name": "Silergy",
            "children": [
                {
                    "name": "Silergy",
                    "value": 73
                }
            ]
        },
        {
            "name": "Skyworks Solutions",
            "children": [
                {
                    "name": "Skyworks Solutions",
                    "value": 401
                }
            ]
        },
        {
            "name": "Smartsheet",
            "children": [
                {
                    "name": "Smartsheet",
                    "value": 604
                }
            ]
        },
        {
            "name": "Snap",
            "children": [
                {
                    "name": "Snap",
                    "value": 233
                }
            ]
        },
        {
            "name": "Snowflake",
            "children": [
                {
                    "name": "Snowflake",
                    "value": 541
                }
            ]
        },
        {
            "name": "SoFi",
            "children": [
                {
                    "name": "SoFi",
                    "value": 490
                }
            ]
        },
        {
            "name": "Soitec",
            "children": [
                {
                    "name": "Soitec",
                    "value": 409
                }
            ]
        },
        {
            "name": "Sony",
            "children": [
                {
                    "name": "Sony",
                    "value": 381
                }
            ]
        },
        {
            "name": "Splunk",
            "children": [
                {
                    "name": "Splunk",
                    "value": 543
                }
            ]
        },
        {
            "name": "Spotify",
            "children": [
                {
                    "name": "Spotify",
                    "value": 470
                }
            ]
        },
        {
            "name": "Supermicro",
            "children": [
                {
                    "name": "Supermicro",
                    "value": 666
                }
            ]
        },
        {
            "name": "Symbotic",
            "children": [
                {
                    "name": "Symbotic",
                    "value": 633
                }
            ]
        },
        {
            "name": "Synopsys",
            "children": [
                {
                    "name": "Synopsys",
                    "value": 682
                }
            ]
        },
        {
            "name": "TE Connectivity",
            "children": [
                {
                    "name": "TE Connectivity",
                    "value": 461
                }
            ]
        },
        {
            "name": "TSMC",
            "children": [
                {
                    "name": "TSMC",
                    "value": 643
                }
            ]
        },
        {
            "name": "Take 2 Interactive",
            "children": [
                {
                    "name": "Take 2 Interactive",
                    "value": 509
                }
            ]
        },
        {
            "name": "Tata Elxsi",
            "children": [
                {
                    "name": "Tata Elxsi",
                    "value": 577
                }
            ]
        },
        {
            "name": "Technoprobe",
            "children": [
                {
                    "name": "Technoprobe",
                    "value": 84
                }
            ]
        },
        {
            "name": "Temenos",
            "children": [
                {
                    "name": "Temenos",
                    "value": 685
                }
            ]
        },
        {
            "name": "Tenable",
            "children": [
                {
                    "name": "Tenable",
                    "value": 598
                }
            ]
        },
        {
            "name": "Tencent",
            "children": [
                {
                    "name": "Tencent",
                    "value": 364
                }
            ]
        },
        {
            "name": "Tesla",
            "children": [
                {
                    "name": "Tesla",
                    "value": 262
                }
            ]
        },
        {
            "name": "Texas Instruments",
            "children": [
                {
                    "name": "Texas Instruments",
                    "value": 336
                }
            ]
        },
        {
            "name": "The Trade Desk",
            "children": [
                {
                    "name": "The Trade Desk",
                    "value": 535
                }
            ]
        },
        {
            "name": "Toast",
            "children": [
                {
                    "name": "Toast",
                    "value": 297
                }
            ]
        },
        {
            "name": "Tokyo Electron",
            "children": [
                {
                    "name": "Tokyo Electron",
                    "value": 570
                }
            ]
        },
        {
            "name": "Topicus",
            "children": [
                {
                    "name": "Topicus",
                    "value": 427
                }
            ]
        },
        {
            "name": "Trend Micro",
            "children": [
                {
                    "name": "Trend Micro",
                    "value": 641
                }
            ]
        },
        {
            "name": "Trimble",
            "children": [
                {
                    "name": "Trimble",
                    "value": 517
                }
            ]
        },
        {
            "name": "Trip.com",
            "children": [
                {
                    "name": "Trip.com",
                    "value": 640
                }
            ]
        },
        {
            "name": "Twilio",
            "children": [
                {
                    "name": "Twilio",
                    "value": 419
                }
            ]
        },
        {
            "name": "Tyler Technologies",
            "children": [
                {
                    "name": "Tyler Technologies",
                    "value": 570
                }
            ]
        },
        {
            "name": "Uber",
            "children": [
                {
                    "name": "Uber",
                    "value": 253
                }
            ]
        },
        {
            "name": "UiPath",
            "children": [
                {
                    "name": "UiPath",
                    "value": 629
                }
            ]
        },
        {
            "name": "Unimicron",
            "children": [
                {
                    "name": "Unimicron",
                    "value": 363
                }
            ]
        },
        {
            "name": "United Microelectronics",
            "children": [
                {
                    "name": "United Microelectronics",
                    "value": 605
                }
            ]
        },
        {
            "name": "Unity Software",
            "children": [
                {
                    "name": "Unity Software",
                    "value": 275
                }
            ]
        },
        {
            "name": "Varonis",
            "children": [
                {
                    "name": "Varonis",
                    "value": 569
                }
            ]
        },
        {
            "name": "Veeva Systems",
            "children": [
                {
                    "name": "Veeva Systems",
                    "value": 578
                }
            ]
        },
        {
            "name": "Vipshop",
            "children": [
                {
                    "name": "Vipshop",
                    "value": 518
                }
            ]
        },
        {
            "name": "Vmware",
            "children": [
                {
                    "name": "Vmware",
                    "value": 413
                }
            ]
        },
        {
            "name": "Wayfair",
            "children": [
                {
                    "name": "Wayfair",
                    "value": 206
                }
            ]
        },
        {
            "name": "WiseTech Global",
            "children": [
                {
                    "name": "WiseTech Global",
                    "value": 526
                }
            ]
        },
        {
            "name": "Wiwynn",
            "children": [
                {
                    "name": "Wiwynn",
                    "value": 351
                }
            ]
        },
        {
            "name": "Wix.com",
            "children": [
                {
                    "name": "Wix.com",
                    "value": 573
                }
            ]
        },
        {
            "name": "Wolfspeed",
            "children": [
                {
                    "name": "Wolfspeed",
                    "value": 458
                }
            ]
        },
        {
            "name": "Wolters Kluwer",
            "children": [
                {
                    "name": "Wolters Kluwer",
                    "value": 632
                }
            ]
        },
        {
            "name": "Workday",
            "children": [
                {
                    "name": "Workday",
                    "value": 574
                }
            ]
        },
        {
            "name": "Workiva",
            "children": [
                {
                    "name": "Workiva",
                    "value": 588
                }
            ]
        },
        {
            "name": "Xero",
            "children": [
                {
                    "name": "Xero",
                    "value": 594
                }
            ]
        },
        {
            "name": "Xiaomi",
            "children": [
                {
                    "name": "Xiaomi",
                    "value": 627
                }
            ]
        },
        {
            "name": "Yandex",
            "children": [
                {
                    "name": "Yandex",
                    "value": 233
                }
            ]
        },
        {
            "name": "Yonyou",
            "children": [
                {
                    "name": "Yonyou",
                    "value": 171
                }
            ]
        },
        {
            "name": "ZOZO",
            "children": [
                {
                    "name": "ZOZO",
                    "value": 476
                }
            ]
        },
        {
            "name": "Zalando",
            "children": [
                {
                    "name": "Zalando",
                    "value": 450
                }
            ]
        },
        {
            "name": "Zebra Technologies",
            "children": [
                {
                    "name": "Zebra Technologies",
                    "value": 416
                }
            ]
        },
        {
            "name": "Zillow",
            "children": [
                {
                    "name": "Zillow",
                    "value": 499
                }
            ]
        },
        {
            "name": "Zomato",
            "children": [
                {
                    "name": "Zomato",
                    "value": 419
                }
            ]
        },
        {
            "name": "Zoom",
            "children": [
                {
                    "name": "Zoom",
                    "value": 328
                }
            ]
        },
        {
            "name": "ZoomInfo",
            "children": [
                {
                    "name": "ZoomInfo",
                    "value": 483
                }
            ]
        },
        {
            "name": "Zscaler",
            "children": [
                {
                    "name": "Zscaler",
                    "value": 605
                }
            ]
        },
        {
            "name": "dLocal",
            "children": [
                {
                    "name": "dLocal",
                    "value": 486
                }
            ]
        },
        {
            "name": "eBay",
            "children": [
                {
                    "name": "eBay",
                    "value": 88
                }
            ]
        },
        {
            "name": "eMemory Technology",
            "children": [
                {
                    "name": "eMemory Technology",
                    "value": 755
                }
            ]
        },
        {
            "name": "monday.com",
            "children": [
                {
                    "name": "monday.com",
                    "value": 579
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
