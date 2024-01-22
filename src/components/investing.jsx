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
            "name": "Root",
    "children": [
        {
            "name": "AMD",
            "children": [
                {
                    "name": "AMD",
                    "value": 614
                }
            ]
        },
        {
            "name": "ASM International",
            "children": [
                {
                    "name": "ASM International",
                    "value": 633
                }
            ]
        },
        {
            "name": "ASML",
            "children": [
                {
                    "name": "ASML",
                    "value": 488
                }
            ]
        },
        {
            "name": "Adobe",
            "children": [
                {
                    "name": "Adobe",
                    "value": 521
                }
            ]
        },
        {
            "name": "Adyen",
            "children": [
                {
                    "name": "Adyen",
                    "value": 455
                }
            ]
        },
        {
            "name": "Airbnb",
            "children": [
                {
                    "name": "Airbnb",
                    "value": 405
                }
            ]
        },
        {
            "name": "Alibaba",
            "children": [
                {
                    "name": "Alibaba",
                    "value": 265
                }
            ]
        },
        {
            "name": "Amadeus IT Group",
            "children": [
                {
                    "name": "Amadeus IT Group",
                    "value": 662
                }
            ]
        },
        {
            "name": "Amazon",
            "children": [
                {
                    "name": "Amazon",
                    "value": 402
                }
            ]
        },
        {
            "name": "Analog Devices",
            "children": [
                {
                    "name": "Analog Devices",
                    "value": 435
                }
            ]
        },
        {
            "name": "Ansys",
            "children": [
                {
                    "name": "Ansys",
                    "value": 748
                }
            ]
        },
        {
            "name": "Apple",
            "children": [
                {
                    "name": "Apple",
                    "value": 475
                }
            ]
        },
        {
            "name": "Applied Materials",
            "children": [
                {
                    "name": "Applied Materials",
                    "value": 410
                }
            ]
        },
        {
            "name": "Arista Networks",
            "children": [
                {
                    "name": "Arista Networks",
                    "value": 536
                }
            ]
        },
        {
            "name": "Arm Holdings",
            "children": [
                {
                    "name": "Arm Holdings",
                    "value": 497
                }
            ]
        },
        {
            "name": "Atlassian",
            "children": [
                {
                    "name": "Atlassian",
                    "value": 464
                }
            ]
        },
        {
            "name": "Autodesk",
            "children": [
                {
                    "name": "Autodesk",
                    "value": 631
                }
            ]
        },
        {
            "name": "Automatic Data Processing",
            "children": [
                {
                    "name": "Automatic Data Processing",
                    "value": 325
                }
            ]
        },
        {
            "name": "Baidu",
            "children": [
                {
                    "name": "Baidu",
                    "value": 453
                }
            ]
        },
        {
            "name": "Block",
            "children": [
                {
                    "name": "Block",
                    "value": 272
                }
            ]
        },
        {
            "name": "Booking.com",
            "children": [
                {
                    "name": "Booking.com",
                    "value": 458
                }
            ]
        },
        {
            "name": "Broadcom",
            "children": [
                {
                    "name": "Broadcom",
                    "value": 519
                }
            ]
        },
        {
            "name": "Cadence Design Systems",
            "children": [
                {
                    "name": "Cadence Design Systems",
                    "value": 409
                }
            ]
        },
        {
            "name": "Canon",
            "children": [
                {
                    "name": "Canon",
                    "value": 471
                }
            ]
        },
        {
            "name": "Cisco",
            "children": [
                {
                    "name": "Cisco",
                    "value": 489
                }
            ]
        },
        {
            "name": "Cloudflare",
            "children": [
                {
                    "name": "Cloudflare",
                    "value": 416
                }
            ]
        },
        {
            "name": "CoStar Group",
            "children": [
                {
                    "name": "CoStar Group",
                    "value": 503
                }
            ]
        },
        {
            "name": "Coinbase",
            "children": [
                {
                    "name": "Coinbase",
                    "value": 384
                }
            ]
        },
        {
            "name": "Constellation Software",
            "children": [
                {
                    "name": "Constellation Software",
                    "value": 454
                }
            ]
        },
        {
            "name": "Coupang",
            "children": [
                {
                    "name": "Coupang",
                    "value": 525
                }
            ]
        },
        {
            "name": "CrowdStrike",
            "children": [
                {
                    "name": "CrowdStrike",
                    "value": 757
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
                    "value": 638
                }
            ]
        },
        {
            "name": "Dell",
            "children": [
                {
                    "name": "Dell",
                    "value": 512
                }
            ]
        },
        {
            "name": "Delta Electronics",
            "children": [
                {
                    "name": "Delta Electronics",
                    "value": 719
                }
            ]
        },
        {
            "name": "Disco Corp.",
            "children": [
                {
                    "name": "Disco Corp.",
                    "value": 319
                }
            ]
        },
        {
            "name": "DoorDash",
            "children": [
                {
                    "name": "DoorDash",
                    "value": 403
                }
            ]
        },
        {
            "name": "Electronic Arts",
            "children": [
                {
                    "name": "Electronic Arts",
                    "value": 437
                }
            ]
        },
        {
            "name": "Equinix",
            "children": [
                {
                    "name": "Equinix",
                    "value": 566
                }
            ]
        },
        {
            "name": "FICO",
            "children": [
                {
                    "name": "FICO",
                    "value": 387
                }
            ]
        },
        {
            "name": "Fidelity National Information Services",
            "children": [
                {
                    "name": "Fidelity National Information Services",
                    "value": 239
                }
            ]
        },
        {
            "name": "Fiserv",
            "children": [
                {
                    "name": "Fiserv",
                    "value": 375
                }
            ]
        },
        {
            "name": "Fortinet",
            "children": [
                {
                    "name": "Fortinet",
                    "value": 535
                }
            ]
        },
        {
            "name": "Global Payments",
            "children": [
                {
                    "name": "Global Payments",
                    "value": 521
                }
            ]
        },
        {
            "name": "GlobalFoundries",
            "children": [
                {
                    "name": "GlobalFoundries",
                    "value": 694
                }
            ]
        },
        {
            "name": "Google",
            "children": [
                {
                    "name": "Google",
                    "value": 312
                }
            ]
        },
        {
            "name": "HP",
            "children": [
                {
                    "name": "HP",
                    "value": 496
                }
            ]
        },
        {
            "name": "Hon Hai Precision Industry",
            "children": [
                {
                    "name": "Hon Hai Precision Industry",
                    "value": 464
                }
            ]
        },
        {
            "name": "HubSpot",
            "children": [
                {
                    "name": "HubSpot",
                    "value": 610
                }
            ]
        },
        {
            "name": "IBM",
            "children": [
                {
                    "name": "IBM",
                    "value": 648
                }
            ]
        },
        {
            "name": "IQVIA",
            "children": [
                {
                    "name": "IQVIA",
                    "value": 550
                }
            ]
        },
        {
            "name": "Infineon",
            "children": [
                {
                    "name": "Infineon",
                    "value": 662
                }
            ]
        },
        {
            "name": "Intel",
            "children": [
                {
                    "name": "Intel",
                    "value": 513
                }
            ]
        },
        {
            "name": "Intuit",
            "children": [
                {
                    "name": "Intuit",
                    "value": 464
                }
            ]
        },
        {
            "name": "Jingdong Mall",
            "children": [
                {
                    "name": "Jingdong Mall",
                    "value": 237
                }
            ]
        },
        {
            "name": "KLA",
            "children": [
                {
                    "name": "KLA",
                    "value": 510
                }
            ]
        },
        {
            "name": "Keyence",
            "children": [
                {
                    "name": "Keyence",
                    "value": 635
                }
            ]
        },
        {
            "name": "Keysight",
            "children": [
                {
                    "name": "Keysight",
                    "value": 529
                }
            ]
        },
        {
            "name": "Kuaishou Technology",
            "children": [
                {
                    "name": "Kuaishou Technology",
                    "value": 481
                }
            ]
        },
        {
            "name": "Lam Research",
            "children": [
                {
                    "name": "Lam Research",
                    "value": 446
                }
            ]
        },
        {
            "name": "Marvell Technology Group",
            "children": [
                {
                    "name": "Marvell Technology Group",
                    "value": 544
                }
            ]
        },
        {
            "name": "MediaTek",
            "children": [
                {
                    "name": "MediaTek",
                    "value": 767
                }
            ]
        },
        {
            "name": "Meituan",
            "children": [
                {
                    "name": "Meituan",
                    "value": 403
                }
            ]
        },
        {
            "name": "MercadoLibre",
            "children": [
                {
                    "name": "MercadoLibre",
                    "value": 710
                }
            ]
        },
        {
            "name": "Meta",
            "children": [
                {
                    "name": "Meta",
                    "value": 359
                }
            ]
        },
        {
            "name": "Microchip Technology",
            "children": [
                {
                    "name": "Microchip Technology",
                    "value": 560
                }
            ]
        },
        {
            "name": "Micron Technology",
            "children": [
                {
                    "name": "Micron Technology",
                    "value": 454
                }
            ]
        },
        {
            "name": "Microsoft",
            "children": [
                {
                    "name": "Microsoft",
                    "value": 417
                }
            ]
        },
        {
            "name": "Mobileye",
            "children": [
                {
                    "name": "Mobileye",
                    "value": 418
                }
            ]
        },
        {
            "name": "MongoDB",
            "children": [
                {
                    "name": "MongoDB",
                    "value": 530
                }
            ]
        },
        {
            "name": "Monolithic Power Systems",
            "children": [
                {
                    "name": "Monolithic Power Systems",
                    "value": 492
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
            "name": "NVIDIA",
            "children": [
                {
                    "name": "NVIDIA",
                    "value": 726
                }
            ]
        },
        {
            "name": "NXP Semiconductors",
            "children": [
                {
                    "name": "NXP Semiconductors",
                    "value": 510
                }
            ]
        },
        {
            "name": "Naver",
            "children": [
                {
                    "name": "Naver",
                    "value": 671
                }
            ]
        },
        {
            "name": "NetEase",
            "children": [
                {
                    "name": "NetEase",
                    "value": 440
                }
            ]
        },
        {
            "name": "Netflix",
            "children": [
                {
                    "name": "Netflix",
                    "value": 432
                }
            ]
        },
        {
            "name": "Nintendo",
            "children": [
                {
                    "name": "Nintendo",
                    "value": 587
                }
            ]
        },
        {
            "name": "ON Semiconductor",
            "children": [
                {
                    "name": "ON Semiconductor",
                    "value": 505
                }
            ]
        },
        {
            "name": "Oracle",
            "children": [
                {
                    "name": "Oracle",
                    "value": 583
                }
            ]
        },
        {
            "name": "Palantir",
            "children": [
                {
                    "name": "Palantir",
                    "value": 496
                }
            ]
        },
        {
            "name": "Palo Alto Networks",
            "children": [
                {
                    "name": "Palo Alto Networks",
                    "value": 614
                }
            ]
        },
        {
            "name": "PayPal",
            "children": [
                {
                    "name": "PayPal",
                    "value": 513
                }
            ]
        },
        {
            "name": "Pinduoduo",
            "children": [
                {
                    "name": "Pinduoduo",
                    "value": 490
                }
            ]
        },
        {
            "name": "QUALCOMM",
            "children": [
                {
                    "name": "QUALCOMM",
                    "value": 556
                }
            ]
        },
        {
            "name": "Renesas Electronics",
            "children": [
                {
                    "name": "Renesas Electronics",
                    "value": 761
                }
            ]
        },
        {
            "name": "Roper Technologies",
            "children": [
                {
                    "name": "Roper Technologies",
                    "value": 506
                }
            ]
        },
        {
            "name": "SAP",
            "children": [
                {
                    "name": "SAP",
                    "value": 630
                }
            ]
        },
        {
            "name": "SK Hynix",
            "children": [
                {
                    "name": "SK Hynix",
                    "value": 636
                }
            ]
        },
        {
            "name": "SMIC",
            "children": [
                {
                    "name": "SMIC",
                    "value": 268
                }
            ]
        },
        {
            "name": "STMicroelectronics",
            "children": [
                {
                    "name": "STMicroelectronics",
                    "value": 568
                }
            ]
        },
        {
            "name": "Salesforce",
            "children": [
                {
                    "name": "Salesforce",
                    "value": 541
                }
            ]
        },
        {
            "name": "Samsung",
            "children": [
                {
                    "name": "Samsung",
                    "value": 584
                }
            ]
        },
        {
            "name": "Schneider Electric",
            "children": [
                {
                    "name": "Schneider Electric",
                    "value": 712
                }
            ]
        },
        {
            "name": "ServiceNow",
            "children": [
                {
                    "name": "ServiceNow",
                    "value": 645
                }
            ]
        },
        {
            "name": "Shopify",
            "children": [
                {
                    "name": "Shopify",
                    "value": 564
                }
            ]
        },
        {
            "name": "Snap",
            "children": [
                {
                    "name": "Snap",
                    "value": 229
                }
            ]
        },
        {
            "name": "Snowflake",
            "children": [
                {
                    "name": "Snowflake",
                    "value": 534
                }
            ]
        },
        {
            "name": "Sony",
            "children": [
                {
                    "name": "Sony",
                    "value": 510
                }
            ]
        },
        {
            "name": "Splunk",
            "children": [
                {
                    "name": "Splunk",
                    "value": 612
                }
            ]
        },
        {
            "name": "Spotify",
            "children": [
                {
                    "name": "Spotify",
                    "value": 348
                }
            ]
        },
        {
            "name": "Symbotic",
            "children": [
                {
                    "name": "Symbotic",
                    "value": 638
                }
            ]
        },
        {
            "name": "Synopsys",
            "children": [
                {
                    "name": "Synopsys",
                    "value": 713
                }
            ]
        },
        {
            "name": "TE Connectivity",
            "children": [
                {
                    "name": "TE Connectivity",
                    "value": 354
                }
            ]
        },
        {
            "name": "TSMC",
            "children": [
                {
                    "name": "TSMC",
                    "value": 609
                }
            ]
        },
        {
            "name": "Take 2 Interactive",
            "children": [
                {
                    "name": "Take 2 Interactive",
                    "value": 493
                }
            ]
        },
        {
            "name": "Tencent",
            "children": [
                {
                    "name": "Tencent",
                    "value": 371
                }
            ]
        },
        {
            "name": "Tesla",
            "children": [
                {
                    "name": "Tesla",
                    "value": 317
                }
            ]
        },
        {
            "name": "Texas Instruments",
            "children": [
                {
                    "name": "Texas Instruments",
                    "value": 427
                }
            ]
        },
        {
            "name": "The Trade Desk",
            "children": [
                {
                    "name": "The Trade Desk",
                    "value": 559
                }
            ]
        },
        {
            "name": "Tokyo Electron",
            "children": [
                {
                    "name": "Tokyo Electron",
                    "value": 569
                }
            ]
        },
        {
            "name": "Uber",
            "children": [
                {
                    "name": "Uber",
                    "value": 257
                }
            ]
        },
        {
            "name": "Veeva Systems",
            "children": [
                {
                    "name": "Veeva Systems",
                    "value": 545
                }
            ]
        },
        {
            "name": "Vmware",
            "children": [
                {
                    "name": "Vmware",
                    "value": 428
                }
            ]
        },
        {
            "name": "Wolters Kluwer",
            "children": [
                {
                    "name": "Wolters Kluwer",
                    "value": 684
                }
            ]
        },
        {
            "name": "Workday",
            "children": [
                {
                    "name": "Workday",
                    "value": 596
                }
            ]
        },
        {
            "name": "Xiaomi",
            "children": [
                {
                    "name": "Xiaomi",
                    "value": 603
                }
            ]
        },
        {
            "name": "Zscaler",
            "children": [
                {
                    "name": "Zscaler",
                    "value": 630
                }
            ]
        }
    ]
    };





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
