// Indian PC Parts Database with compatibility information
const partsDatabase = {
    cpu: [
        {
            id: 'i5-13600k',
            name: 'Intel Core i5-13600K',
            brand: 'Intel',
            price: 28999,
            socket: 'LGA 1700',
            tdp: 125,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: {
                cores: '14 (6P + 8E)',
                threads: 20,
                baseSpeed: '3.5 GHz',
                boostSpeed: '5.1 GHz',
                cache: '24MB',
                memorySupport: 'DDR4/DDR5'
            }
        },
        {
            id: 'r7-7700x',
            name: 'AMD Ryzen 7 7700X',
            brand: 'AMD',
            price: 32999,
            socket: 'AM5',
            tdp: 105,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: {
                cores: 8,
                threads: 16,
                baseSpeed: '3.8 GHz',
                boostSpeed: '5.4 GHz',
                cache: '32MB',
                memorySupport: 'DDR5'
            }
        },
        {
            id: 'i7-13700k',
            name: 'Intel Core i7-13700K',
            brand: 'Intel',
            price: 41999,
            socket: 'LGA 1700',
            tdp: 125,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: {
                cores: '16 (8P + 8E)',
                threads: 24,
                baseSpeed: '3.4 GHz',
                boostSpeed: '5.4 GHz',
                cache: '30MB',
                memorySupport: 'DDR4/DDR5'
            }
        },
        {
            id: 'r9-7950x',
            name: 'AMD Ryzen 9 7950X',
            brand: 'AMD',
            price: 54999,
            socket: 'AM5',
            tdp: 170,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: {
                cores: 16,
                threads: 32,
                baseSpeed: '4.5 GHz',
                boostSpeed: '5.7 GHz',
                cache: '64MB',
                memorySupport: 'DDR5'
            }
        },
        {
            name: "Intel Core i7-13700K",
            price: 41999,
            brand: "Intel",
            socket: "LGA1700",
            tdp: 125,
            inStock: true,
            amazon: "https://www.amazon.in/Intel-i7-13700K-Desktop-Processor-P-cores/dp/B0BCF54BN4/",
            mdcomputers: "https://mdcomputers.in/intel-core-i7-13700k.html",
            vedantcomputers: "https://www.vedantcomputers.com/intel-13th-gen-core-i7-13700k-processor",
            pcstudio: "https://www.pcstudio.in/product/intel-core-i7-13700k-processor/"
        },
        {
            name: "AMD Ryzen 5 5600X",
            price: 15999,
            brand: "AMD",
            socket: "AM4",
            tdp: 65,
            inStock: true,
            amazon: "https://www.amazon.in/AMD-Ryzen-5600X-Processor-100-100000065BOX/dp/B08166SLDF/",
            primeabgb: "https://www.primeabgb.com/online-price-reviews-india/amd-ryzen-5-5600x-desktop-processor/",
            mdcomputers: "https://mdcomputers.in/amd-ryzen-5-5600x.html",
            vedantcomputers: "https://www.vedantcomputers.com/amd-ryzen-5-5600x-processor",
            pcstudio: "https://www.pcstudio.in/product/amd-ryzen-5-5600x-processor/"
        },
        {
            name: "Intel Core i9-12900K",
            price: 42999,
            brand: "Intel",
            socket: "LGA1700",
            tdp: 125,
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z7",
            primeabgb: "https://primeabgb.com/dp/example5"
        },
        {
            name: "AMD Ryzen 9 5900X",
            price: 34999,
            brand: "AMD",
            socket: "AM4",
            tdp: 105,
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z8",
            primeabgb: "https://primeabgb.com/dp/example6"
        },
        {
            name: "Intel Core i5-13600K",
            price: 27999,
            brand: "Intel",
            socket: "LGA1700",
            tdp: 125,
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z9",
            primeabgb: "https://primeabgb.com/dp/example7"
        },
        {
            name: "AMD Ryzen 5 7600X",
            price: 22999,
            brand: "AMD",
            socket: "AM5",
            tdp: 105,
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z0",
            primeabgb: "https://primeabgb.com/dp/example8"
        },
        {
            name: "Intel Core i3-12100F",
            price: 9999,
            brand: "Intel",
            socket: "LGA1700",
            tdp: 58,
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z1",
            primeabgb: "https://primeabgb.com/dp/example9"
        },
        {
            name: "AMD Ryzen 3 4100",
            price: 7999,
            brand: "AMD",
            socket: "AM4",
            tdp: 65,
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z2",
            primeabgb: "https://primeabgb.com/dp/example10"
        },
        {
            id: 'i3-12100f',
            name: 'Intel Core i3-12100F',
            brand: 'Intel',
            price: 9999,
            socket: 'LGA 1700',
            tdp: 58,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: { cores: 4, threads: 8, baseSpeed: '3.3 GHz', boostSpeed: '4.3 GHz', cache: '12MB', memorySupport: 'DDR4/DDR5' }
        },
        {
            id: 'r5-5600x',
            name: 'AMD Ryzen 5 5600X',
            brand: 'AMD',
            price: 15999,
            socket: 'AM4',
            tdp: 65,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: { cores: 6, threads: 12, baseSpeed: '3.7 GHz', boostSpeed: '4.6 GHz', cache: '32MB', memorySupport: 'DDR4' }
        },
        {
            id: 'i9-13900k',
            name: 'Intel Core i9-13900K',
            brand: 'Intel',
            price: 59999,
            socket: 'LGA 1700',
            tdp: 125,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: { cores: '24 (8P + 16E)', threads: 32, baseSpeed: '3.0 GHz', boostSpeed: '5.8 GHz', cache: '36MB', memorySupport: 'DDR4/DDR5' }
        },
        {
            id: 'r5-7600',
            name: 'AMD Ryzen 5 7600',
            brand: 'AMD',
            price: 20999,
            socket: 'AM5',
            tdp: 65,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: { cores: 6, threads: 12, baseSpeed: '3.8 GHz', boostSpeed: '5.1 GHz', cache: '32MB', memorySupport: 'DDR5' }
        },
        {
            id: 'i5-12400f',
            name: 'Intel Core i5-12400F',
            brand: 'Intel',
            price: 13999,
            socket: 'LGA 1700',
            tdp: 65,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: { cores: 6, threads: 12, baseSpeed: '2.5 GHz', boostSpeed: '4.4 GHz', cache: '18MB', memorySupport: 'DDR4/DDR5' }
        },
        {
            id: 'i9-13900k',
            name: 'Intel Core i9-13900K',
            brand: 'Intel',
            price: 59999,
            socket: 'LGA 1700',
            tdp: 125,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: { cores: '24 (8P + 16E)', threads: 32, baseSpeed: '3.0 GHz', boostSpeed: '5.8 GHz', cache: '36MB', memorySupport: 'DDR4/DDR5' }
        },
        {
            id: 'i7-12700k',
            name: 'Intel Core i7-12700K',
            brand: 'Intel',
            price: 34999,
            socket: 'LGA 1700',
            tdp: 125,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: { cores: '12 (8P + 4E)', threads: 20, baseSpeed: '3.6 GHz', boostSpeed: '5.0 GHz', cache: '25MB', memorySupport: 'DDR4/DDR5' }
        },
        {
            id: 'r9-5950x',
            name: 'AMD Ryzen 9 5950X',
            brand: 'AMD',
            price: 49999,
            socket: 'AM4',
            tdp: 105,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: { cores: 16, threads: 32, baseSpeed: '3.4 GHz', boostSpeed: '4.9 GHz', cache: '64MB', memorySupport: 'DDR4' }
        },
        {
            id: 'r7-5800x',
            name: 'AMD Ryzen 7 5800X',
            brand: 'AMD',
            price: 24999,
            socket: 'AM4',
            tdp: 105,
            image: 'https://m.media-amazon.com/images/I/61VbK4QzQGL._SL1500_.jpg',
            specifications: { cores: 8, threads: 16, baseSpeed: '3.8 GHz', boostSpeed: '4.7 GHz', cache: '32MB', memorySupport: 'DDR4' }
        }
    ],
    motherboard: [
        {
            id: 'b760-aorus',
            name: 'Gigabyte B760 AORUS Elite AX',
            brand: 'Gigabyte',
            price: 18999,
            socket: 'LGA 1700',
            formFactor: 'ATX',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                chipset: 'B760',
                memorySlots: 4,
                maxMemory: '128GB',
                memoryType: 'DDR5',
                pciSlots: '2x PCIe 4.0 x16, 2x PCIe 3.0 x1',
                m2Slots: 3,
                wifi: true,
                bluetooth: true
            }
        },
        {
            id: 'b650-tuf',
            name: 'ASUS TUF Gaming B650-Plus',
            brand: 'ASUS',
            price: 19999,
            socket: 'AM5',
            formFactor: 'ATX',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                chipset: 'B650',
                memorySlots: 4,
                maxMemory: '128GB',
                memoryType: 'DDR5',
                pciSlots: '2x PCIe 4.0 x16, 2x PCIe 3.0 x1',
                m2Slots: 3,
                wifi: false,
                bluetooth: false
            }
        },
        {
            id: 'z790-aorus',
            name: 'Gigabyte Z790 AORUS Master',
            brand: 'Gigabyte',
            price: 34999,
            socket: 'LGA 1700',
            formFactor: 'ATX',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                chipset: 'Z790',
                memorySlots: 4,
                maxMemory: '128GB',
                memoryType: 'DDR5',
                pciSlots: '3x PCIe 4.0 x16, 2x PCIe 3.0 x1',
                m2Slots: 4,
                wifi: true,
                bluetooth: true
            }
        },
        {
            id: 'x670e-rog',
            name: 'ASUS ROG Crosshair X670E Hero',
            brand: 'ASUS',
            price: 39999,
            socket: 'AM5',
            formFactor: 'ATX',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                chipset: 'X670E',
                memorySlots: 4,
                maxMemory: '128GB',
                memoryType: 'DDR5',
                pciSlots: '3x PCIe 5.0 x16, 2x PCIe 4.0 x1',
                m2Slots: 4,
                wifi: true,
                bluetooth: true
            }
        },
        {
            name: "MSI MAG B760M MORTAR WIFI DDR4",
            price: 19999,
            brand: "MSI",
            socket: "LGA1700",
            formFactor: "Micro-ATX",
            inStock: true,
            amazon: "https://www.amazon.in/MSI-B760M-MORTAR-Gaming-Motherboard/dp/B0BRH6MP5L/",
            primeabgb: "https://www.primeabgb.com/online-price-reviews-india/msi-mag-b760m-mortar-wifi-ddr4-motherboard/",
            mdcomputers: "https://mdcomputers.in/msi-mag-b760m-mortar-wifi-ddr4.html",
            vedantcomputers: "https://www.vedantcomputers.com/msi-mag-b760m-mortar-wifi-ddr4-motherboard",
            pcstudio: "https://www.pcstudio.in/product/msi-mag-b760m-mortar-wifi-ddr4-motherboard/"
        },
        {
            name: "ASUS ROG STRIX B650-A GAMING WIFI",
            price: 29999,
            brand: "ASUS",
            socket: "AM5",
            formFactor: "ATX",
            inStock: true,
            amazon: "https://www.amazon.in/ASUS-B650-Gaming-Motherboard-Cooling/dp/B0BHD2LX9P/",
            primeabgb: "https://www.primeabgb.com/online-price-reviews-india/asus-rog-strix-b650-a-gaming-wifi-motherboard/",
            mdcomputers: "https://mdcomputers.in/asus-rog-strix-b650-a-gaming-wifi.html",
            vedantcomputers: "https://www.vedantcomputers.com/asus-rog-strix-b650-a-gaming-wifi-motherboard",
            pcstudio: "https://www.pcstudio.in/product/asus-rog-strix-b650-a-gaming-wifi-motherboard/"
        },
        {
            name: "Gigabyte Z690 UD",
            price: 18999,
            brand: "Gigabyte",
            socket: "LGA1700",
            formFactor: "ATX",
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z9",
            primeabgb: "https://primeabgb.com/dp/example9"
        },
        {
            name: "MSI MPG X570S EDGE MAX",
            price: 19999,
            brand: "MSI",
            socket: "AM4",
            formFactor: "ATX",
            inStock: false,
            amazon: "https://amzn.to/3x1Y2Z0",
            primeabgb: "https://primeabgb.com/dp/example10"
        },
        {
            name: "ASUS ROG STRIX Z690-F",
            price: 29999,
            brand: "ASUS",
            socket: "LGA1700",
            formFactor: "ATX",
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z1",
            primeabgb: "https://primeabgb.com/dp/example11"
        },
        {
            name: "Gigabyte X570 AORUS ELITE",
            price: 17999,
            brand: "Gigabyte",
            socket: "AM4",
            formFactor: "ATX",
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z2",
            primeabgb: "https://primeabgb.com/dp/example12"
        },
        {
            id: 'b550-tomahawk',
            name: 'MSI MAG B550 Tomahawk',
            brand: 'MSI',
            price: 13999,
            socket: 'AM4',
            formFactor: 'ATX',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { chipset: 'B550', memorySlots: 4, maxMemory: '128GB', memoryType: 'DDR4', pciSlots: '2x PCIe 4.0 x16', m2Slots: 2, wifi: false, bluetooth: false }
        },
        {
            id: 'b450-tomahawk',
            name: 'MSI B450 Tomahawk Max',
            brand: 'MSI',
            price: 8999,
            socket: 'AM4',
            formFactor: 'ATX',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { chipset: 'B450', memorySlots: 4, maxMemory: '64GB', memoryType: 'DDR4', pciSlots: '2x PCIe 3.0 x16', m2Slots: 1, wifi: false, bluetooth: false }
        },
        {
            id: 'z690-aorus',
            name: 'Gigabyte Z690 AORUS Elite',
            brand: 'Gigabyte',
            price: 22999,
            socket: 'LGA 1700',
            formFactor: 'ATX',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { chipset: 'Z690', memorySlots: 4, maxMemory: '128GB', memoryType: 'DDR5', pciSlots: '3x PCIe 4.0 x16', m2Slots: 4, wifi: true, bluetooth: true }
        },
        {
            id: 'b550-aorus',
            name: 'Gigabyte B550 AORUS Elite',
            brand: 'Gigabyte',
            price: 11999,
            socket: 'AM4',
            formFactor: 'ATX',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { chipset: 'B550', memorySlots: 4, maxMemory: '128GB', memoryType: 'DDR4', pciSlots: '2x PCIe 4.0 x16', m2Slots: 2, wifi: false, bluetooth: false }
        },
        {
            id: 'z790-tuf',
            name: 'ASUS TUF Gaming Z790-Plus',
            brand: 'ASUS',
            price: 24999,
            socket: 'LGA 1700',
            formFactor: 'ATX',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { chipset: 'Z790', memorySlots: 4, maxMemory: '128GB', memoryType: 'DDR5', pciSlots: '3x PCIe 4.0 x16', m2Slots: 4, wifi: true, bluetooth: true }
        }
    ],
    gpu: [
        {
            id: 'rtx-4070',
            name: 'NVIDIA GeForce RTX 4070',
            brand: 'NVIDIA',
            price: 54999,
            vram: '12GB GDDR6X',
            tdp: 200,
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                memoryInterface: '192-bit',
                boostClock: '2.6 GHz',
                length: '267mm',
                powerConnector: '8-pin + 8-pin',
                ports: '3x DisplayPort 1.4a, 1x HDMI 2.1'
            }
        },
        {
            id: 'rx-7700xt',
            name: 'AMD Radeon RX 7700 XT',
            brand: 'AMD',
            price: 49999,
            vram: '12GB GDDR6',
            tdp: 245,
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                memoryInterface: '192-bit',
                boostClock: '2.54 GHz',
                length: '267mm',
                powerConnector: '8-pin + 8-pin',
                ports: '3x DisplayPort 2.1, 1x HDMI 2.1'
            }
        },
        {
            id: 'rtx-4080',
            name: 'NVIDIA GeForce RTX 4080',
            brand: 'NVIDIA',
            price: 89999,
            vram: '16GB GDDR6X',
            tdp: 320,
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                memoryInterface: '256-bit',
                boostClock: '2.51 GHz',
                length: '304mm',
                powerConnector: '8-pin + 8-pin + 8-pin',
                ports: '3x DisplayPort 1.4a, 1x HDMI 2.1'
            }
        },
        {
            id: 'rx-7900xtx',
            name: 'AMD Radeon RX 7900 XTX',
            brand: 'AMD',
            price: 79999,
            vram: '24GB GDDR6',
            tdp: 355,
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                memoryInterface: '384-bit',
                boostClock: '2.3 GHz',
                length: '287mm',
                powerConnector: '8-pin + 8-pin + 8-pin',
                ports: '2x DisplayPort 2.1, 1x HDMI 2.1, 1x USB-C'
            }
        },
        {
            name: "AMD Radeon RX 7600",
            price: 29999,
            brand: "AMD",
            vram: "8GB",
            tdp: 165,
            inStock: true,
            amazon: "https://www.amazon.in/Sapphire-Gaming-Graphics-256-bit-11310-01-20G/dp/B0C5TQPXPQ/",
            primeabgb: "https://www.primeabgb.com/online-price-reviews-india/sapphire-pulse-amd-radeon-rx-7600-gaming-8gb-gddr6/",
            mdcomputers: "https://mdcomputers.in/sapphire-pulse-radeon-rx-7600-8gb-gddr6.html",
            vedantcomputers: "https://www.vedantcomputers.com/sapphire-pulse-radeon-rx-7600-8gb-gddr6",
            pcstudio: "https://www.pcstudio.in/product/sapphire-pulse-radeon-rx-7600-8gb-gddr6/"
        },
        {
            name: "NVIDIA RTX 3070",
            price: 39999,
            brand: "NVIDIA",
            vram: "8GB",
            tdp: 220,
            inStock: false,
            amazon: "https://amzn.to/3x1Y2Z5",
            primeabgb: "https://primeabgb.com/dp/example13"
        },
        {
            name: "AMD RX 6700 XT",
            price: 34999,
            brand: "AMD",
            vram: "12GB",
            tdp: 230,
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z6",
            primeabgb: "https://primeabgb.com/dp/example14"
        },
        {
            name: "NVIDIA RTX 3080",
            price: 59999,
            brand: "NVIDIA",
            vram: "10GB",
            tdp: 320,
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z7",
            primeabgb: "https://primeabgb.com/dp/example15"
        },
        {
            name: "AMD RX 6800 XT",
            price: 54999,
            brand: "AMD",
            vram: "16GB",
            tdp: 300,
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z8",
            primeabgb: "https://primeabgb.com/dp/example16"
        },
        {
            id: 'rtx-3060',
            name: 'NVIDIA GeForce RTX 3060',
            brand: 'NVIDIA',
            price: 29999,
            vram: '12GB GDDR6',
            tdp: 170,
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { memoryInterface: '192-bit', boostClock: '1.78 GHz', length: '242mm', powerConnector: '8-pin', ports: '3x DisplayPort, 1x HDMI' }
        },
        {
            id: 'rtx-3050',
            name: 'NVIDIA GeForce RTX 3050',
            brand: 'NVIDIA',
            price: 22999,
            vram: '8GB GDDR6',
            tdp: 130,
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { memoryInterface: '128-bit', boostClock: '1.78 GHz', length: '242mm', powerConnector: '8-pin', ports: '3x DisplayPort, 1x HDMI' }
        },
        {
            id: 'rx-6600',
            name: 'AMD Radeon RX 6600',
            brand: 'AMD',
            price: 18999,
            vram: '8GB GDDR6',
            tdp: 132,
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { memoryInterface: '128-bit', boostClock: '2.49 GHz', length: '190mm', powerConnector: '8-pin', ports: '1x HDMI, 3x DisplayPort' }
        },
        {
            id: 'rtx-4090',
            name: 'NVIDIA GeForce RTX 4090',
            brand: 'NVIDIA',
            price: 179999,
            vram: '24GB GDDR6X',
            tdp: 450,
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { memoryInterface: '384-bit', boostClock: '2.52 GHz', length: '304mm', powerConnector: '16-pin', ports: '3x DisplayPort, 1x HDMI' }
        },
        {
            id: 'rx-6800',
            name: 'AMD Radeon RX 6800',
            brand: 'AMD',
            price: 49999,
            vram: '16GB GDDR6',
            tdp: 250,
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { memoryInterface: '256-bit', boostClock: '2.1 GHz', length: '267mm', powerConnector: '2x 8-pin', ports: '1x HDMI, 2x DisplayPort, 1x USB-C' }
        }
    ],
    ram: [
        {
            id: 'corsair-ddr4-3200',
            name: 'Corsair Vengeance LPX 16GB (2x8GB)',
            brand: 'Corsair',
            price: 3999,
            type: 'DDR4',
            speed: '3200MHz',
            capacity: '16GB (2x8GB)',
            image: 'https://m.media-amazon.com/images/I/71N1DRGAC7L._SL1500_.jpg',
            specifications: { timing: 'CL16', voltage: '1.35V', height: '34mm', rgb: false, modules: '2x8GB', xmp: true, ecc: false },
            amazon: 'https://www.amazon.in/dp/B07RM39V5F',
            mdcomputers: 'https://mdcomputers.in/corsair-vengeance-16gb-ddr4-3200mhz-cmk16gx4m2b3200c16.html',
            vedantcomputers: 'https://www.vedantcomputers.com/corsair-vengeance-16gb-ddr4-3200mhz',
            pcstudio: 'https://www.pcstudio.in/product/corsair-vengeance-16gb-kit-ddr4-3200mhz/',
            theitdepot: 'https://www.theitdepot.com/details-Corsair+Vengeance+LPX+16GB+%282x8GB%29+DDR4+3200MHz+Desktop+Memory+%28CMK16GX4M2B3200C16%29_C4P34936.html',
            gamesncomps: 'https://www.gamesncomps.com/product/corsair-vengeance-lpx-16gb-2x8gb-ddr4-3200mhz/'
        },
        {
            id: 'gskill-ddr4-3600',
            name: 'G.Skill Ripjaws V 16GB (2x8GB)',
            brand: 'G.Skill',
            price: 4299,
            type: 'DDR4',
            speed: '3600MHz',
            capacity: '16GB (2x8GB)',
            image: 'https://m.media-amazon.com/images/I/71N1DRGAC7L._SL1500_.jpg',
            specifications: { timing: 'CL18', voltage: '1.35V', height: '42mm', rgb: false, modules: '2x8GB', xmp: true, ecc: false },
            amazon: 'https://www.amazon.in/dp/B07Z45XB3G',
            mdcomputers: 'https://mdcomputers.in/g-skill-ripjaws-v-16gb-ddr4-3600mhz-f4-3600c18d-16gvk.html',
            vedantcomputers: 'https://www.vedantcomputers.com/g-skill-ripjaws-v-16gb-ddr4-3600mhz',
            pcstudio: 'https://www.pcstudio.in/product/g-skill-ripjaws-v-16gb-kit-ddr4-3600mhz/',
            theitdepot: 'https://www.theitdepot.com/details-G.Skill+Ripjaws+V+16GB+%282x8GB%29+DDR4+3600MHz+Desktop+Memory+%28F4-3600C18D-16GVK%29_C4P34937.html',
            gamesncomps: 'https://www.gamesncomps.com/product/g-skill-ripjaws-v-16gb-2x8gb-ddr4-3600mhz/'
        }
    ],
    storage: [
        {
            id: 'samsung-980-pro',
            name: 'Samsung 980 PRO',
            brand: 'Samsung',
            price: 12999,
            type: 'NVMe SSD',
            capacity: '1TB',
            interface: 'PCIe 4.0 x4',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                readSpeed: '7000 MB/s',
                writeSpeed: '5000 MB/s',
                formFactor: 'M.2 2280',
                endurance: '600 TBW'
            }
        },
        {
            id: 'wd-black-sn850x',
            name: 'WD Black SN850X',
            brand: 'Western Digital',
            price: 11999,
            type: 'NVMe SSD',
            capacity: '1TB',
            interface: 'PCIe 4.0 x4',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                readSpeed: '7300 MB/s',
                writeSpeed: '6300 MB/s',
                formFactor: 'M.2 2280',
                endurance: '600 TBW'
            }
        },
        {
            id: 'samsung-990-pro',
            name: 'Samsung 990 PRO',
            brand: 'Samsung',
            price: 14999,
            type: 'NVMe SSD',
            capacity: '1TB',
            interface: 'PCIe 4.0 x4',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                readSpeed: '7450 MB/s',
                writeSpeed: '6900 MB/s',
                formFactor: 'M.2 2280',
                endurance: '600 TBW'
            }
        },
        {
            id: 'crucial-p5-plus',
            name: 'Crucial P5 Plus',
            brand: 'Crucial',
            price: 9999,
            type: 'NVMe SSD',
            capacity: '1TB',
            interface: 'PCIe 4.0 x4',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                readSpeed: '6600 MB/s',
                writeSpeed: '5000 MB/s',
                formFactor: 'M.2 2280',
                endurance: '600 TBW'
            }
        },
        {
            name: "WD Blue SN570 1TB",
            price: 7999,
            brand: "Western Digital",
            type: "NVMe SSD",
            interface: "M.2",
            inStock: true,
            amazon: "https://www.amazon.in/Western-Digital-SN570-Internal-Gaming/dp/B09HKDQ1RN/",
            primeabgb: "https://www.primeabgb.com/online-price-reviews-india/western-digital-blue-sn570-1tb-m-2-nvme-internal-ssd-wds100t3b0c/"
        },
        {
            name: "Seagate Barracuda 2TB",
            price: 4499,
            brand: "Seagate",
            type: "HDD",
            interface: "SATA",
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z6",
            primeabgb: "https://primeabgb.com/dp/example13"
        },
        {
            name: "Samsung 870 EVO 1TB",
            price: 6999,
            brand: "Samsung",
            type: "SATA SSD",
            interface: "SATA",
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z8",
            primeabgb: "https://primeabgb.com/dp/example15"
        },
        {
            id: 'crucial-mx500',
            name: 'Crucial MX500 1TB',
            brand: 'Crucial',
            price: 6999,
            type: 'SATA SSD',
            capacity: '1TB',
            interface: 'SATA',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { readSpeed: '560 MB/s', writeSpeed: '510 MB/s', formFactor: '2.5"', endurance: '360 TBW' }
        },
        {
            id: 'wd-blue-1tb',
            name: 'WD Blue 1TB HDD',
            brand: 'Western Digital',
            price: 2999,
            type: 'HDD',
            capacity: '1TB',
            interface: 'SATA',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { readSpeed: '150 MB/s', writeSpeed: '150 MB/s', formFactor: '3.5"', endurance: 'N/A' }
        },
        {
            id: 'samsung-870-evo',
            name: 'Samsung 870 EVO 500GB',
            brand: 'Samsung',
            price: 3999,
            type: 'SATA SSD',
            capacity: '500GB',
            interface: 'SATA',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { readSpeed: '560 MB/s', writeSpeed: '530 MB/s', formFactor: '2.5"', endurance: '300 TBW' }
        },
        {
            id: 'samsung-980-500gb',
            name: 'Samsung 980 500GB NVMe',
            brand: 'Samsung',
            price: 3499,
            type: 'NVMe SSD',
            capacity: '500GB',
            interface: 'PCIe 3.0 x4',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { readSpeed: '3100 MB/s', writeSpeed: '2600 MB/s', formFactor: 'M.2 2280', endurance: '150 TBW' }
        },
        {
            id: 'seagate-barracuda-2tb',
            name: 'Seagate Barracuda 2TB',
            brand: 'Seagate',
            price: 4499,
            type: 'HDD',
            capacity: '2TB',
            interface: 'SATA',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { readSpeed: '220 MB/s', writeSpeed: '220 MB/s', formFactor: '3.5"', endurance: 'N/A' }
        }
    ],
    psu: [
        {
            id: 'rm850x',
            name: 'Corsair RM850x',
            brand: 'Corsair',
            price: 12999,
            wattage: 850,
            efficiency: '80+ Gold',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                modular: 'Full',
                protection: 'OVP, UVP, OCP, OTP, SCP',
                fanSize: '135mm',
                warranty: '10 years'
            }
        },
        {
            id: 'focus-gx-850',
            name: 'Seasonic Focus GX-850',
            brand: 'Seasonic',
            price: 13999,
            wattage: 850,
            efficiency: '80+ Gold',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                modular: 'Full',
                protection: 'OVP, UVP, OCP, OTP, SCP',
                fanSize: '135mm',
                warranty: '10 years'
            }
        },
        {
            id: 'hx1000',
            name: 'Corsair HX1000',
            brand: 'Corsair',
            price: 17999,
            wattage: 1000,
            efficiency: '80+ Platinum',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                modular: 'Full',
                protection: 'OVP, UVP, OCP, OTP, SCP',
                fanSize: '135mm',
                warranty: '10 years'
            }
        },
        {
            id: 'prime-tx-1000',
            name: 'Seasonic PRIME TX-1000',
            brand: 'Seasonic',
            price: 19999,
            wattage: 1000,
            efficiency: '80+ Titanium',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                modular: 'Full',
                protection: 'OVP, UVP, OCP, OTP, SCP',
                fanSize: '135mm',
                warranty: '12 years'
            }
        },
        {
            name: "be quiet! Dark Power 12 1000W",
            price: 24999,
            brand: "be quiet!",
            wattage: "1000W",
            efficiency: "80+ Titanium",
            inStock: true,
            amazon: "https://www.amazon.in/quiet-Dark-Power-BN816-Supply/dp/B08WRB5X6F/",
            primeabgb: "https://www.primeabgb.com/online-price-reviews-india/be-quiet-dark-power-12-1000w-80-plus-titanium-power-supply-bn816/",
            mdcomputers: "https://mdcomputers.in/be-quiet-dark-power-12-1000w-bn816.html",
            vedantcomputers: "https://www.vedantcomputers.com/be-quiet-dark-power-12-1000w",
            pcstudio: "https://www.pcstudio.in/product/be-quiet-dark-power-12-1000w-psu/"
        },
        {
            name: "Antec HCG750",
            price: 7999,
            brand: "Antec",
            wattage: "750W",
            efficiency: "80+ Gold",
            inStock: false,
            amazon: "https://amzn.to/3x1Y2Z1",
            primeabgb: "https://primeabgb.com/dp/example15"
        },
        {
            name: "ASUS ROG Strix 850W",
            price: 11999,
            brand: "ASUS",
            wattage: "850W",
            efficiency: "80+ Gold",
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z2",
            primeabgb: "https://primeabgb.com/dp/example16"
        },
        {
            name: "Seasonic Focus GX-850",
            price: 13999,
            brand: "Seasonic",
            wattage: "850W",
            efficiency: "80+ Gold",
            inStock: true,
            amazon: "https://amzn.to/3x1Y2Z3",
            primeabgb: "https://primeabgb.com/dp/example17"
        },
        {
            id: 'antec-cs850',
            name: 'Antec CSK 850W',
            brand: 'Antec',
            price: 7999,
            wattage: 850,
            efficiency: '80+ Bronze',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { modular: 'Semi', protection: 'OVP, UVP, OCP, OTP, SCP', fanSize: '120mm', warranty: '5 years' }
        },
        {
            id: 'coolermaster-650w',
            name: 'Cooler Master MWE 650W',
            brand: 'Cooler Master',
            price: 4999,
            wattage: 650,
            efficiency: '80+ Bronze',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { modular: 'No', protection: 'OVP, UVP, OCP, OTP, SCP', fanSize: '120mm', warranty: '5 years' }
        },
        {
            id: 'evga-600w',
            name: 'EVGA 600 W1',
            brand: 'EVGA',
            price: 3499,
            wattage: 600,
            efficiency: '80+ White',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { modular: 'No', protection: 'OVP, UVP, OCP, OTP, SCP', fanSize: '120mm', warranty: '3 years' }
        },
        {
            id: 'seasonic-focus-750',
            name: 'Seasonic Focus GX-750',
            brand: 'Seasonic',
            price: 9999,
            wattage: 750,
            efficiency: '80+ Gold',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: { modular: 'Full', protection: 'OVP, UVP, OCP, OTP, SCP', fanSize: '135mm', warranty: '10 years' }
        }
    ],
    case: [
        {
            id: 'lancool-3',
            name: 'Lian Li Lancool III',
            brand: 'Lian Li',
            price: 12999,
            type: 'Mid Tower',
            maxGpuLength: '420mm',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                material: 'Steel + Tempered Glass',
                motherboardSupport: 'E-ATX, ATX, Micro-ATX, Mini-ITX',
                expansionSlots: 7,
                includedFans: 3,
                maxFans: 10,
                usbPorts: '1x USB 3.1 Type-C, 2x USB 3.0'
            }
        },
        {
            id: 'o11-dynamic',
            name: 'Lian Li O11 Dynamic EVO',
            brand: 'Lian Li',
            price: 14999,
            type: 'Mid Tower',
            maxGpuLength: '420mm',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                material: 'Aluminum + Tempered Glass',
                motherboardSupport: 'E-ATX, ATX, Micro-ATX, Mini-ITX',
                expansionSlots: 7,
                includedFans: 0,
                maxFans: 10,
                usbPorts: '1x USB 3.1 Type-C, 2x USB 3.0'
            }
        },
        {
            id: 'h7-flow',
            name: 'NZXT H7 Flow',
            brand: 'NZXT',
            price: 11999,
            type: 'Mid Tower',
            maxGpuLength: '400mm',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                material: 'Steel + Tempered Glass',
                motherboardSupport: 'E-ATX, ATX, Micro-ATX, Mini-ITX',
                expansionSlots: 7,
                includedFans: 2,
                maxFans: 7,
                usbPorts: '1x USB 3.1 Type-C, 1x USB 3.0'
            }
        },
        {
            id: '5000d',
            name: 'Corsair 5000D Airflow',
            brand: 'Corsair',
            price: 13999,
            type: 'Mid Tower',
            maxGpuLength: '420mm',
            image: 'https://m.media-amazon.com/images/I/81YzHGA+UQL._SL1500_.jpg',
            specifications: {
                material: 'Steel + Tempered Glass',
                motherboardSupport: 'E-ATX, ATX, Micro-ATX, Mini-ITX',
                expansionSlots: 7,
                includedFans: 2,
                maxFans: 10,
                usbPorts: '1x USB 3.1 Type-C, 1x USB 3.0'
            }
        },
        {
            id: 'nzxt-h510',
            name: 'NZXT H510',
            brand: 'NZXT',
            price: 7999,
            type: 'Mid Tower',
            maxGpuLength: '381mm',
            image: 'https://m.media-amazon.com/images/I/71N1DRGAC7L._SL1500_.jpg',
            specifications: { material: 'Steel + Tempered Glass', motherboardSupport: 'ATX, Micro-ATX, Mini-ITX', expansionSlots: 7, includedFans: 2, maxFans: 4, usbPorts: '1x USB-C, 1x USB 3.1', dimensions: '460 x 210 x 428mm', maxCpuCoolerHeight: '165mm', maxPsuLength: '210mm', dustFilters: true, toolLessDesign: true }
        },
        {
            id: 'deepcool-macube110',
            name: 'Deepcool MACUBE 110',
            brand: 'Deepcool',
            price: 3999,
            type: 'Micro ATX',
            maxGpuLength: '320mm',
            image: 'https://m.media-amazon.com/images/I/71N1DRGAC7L._SL1500_.jpg',
            specifications: { material: 'Steel + Tempered Glass', motherboardSupport: 'Micro-ATX, Mini-ITX', expansionSlots: 4, includedFans: 1, maxFans: 5, usbPorts: '2x USB 3.0', dimensions: '400 x 225 x 431mm', maxCpuCoolerHeight: '165mm', maxPsuLength: '160mm', dustFilters: true, toolLessDesign: false }
        },
        {
            id: 'fractal-meshify',
            name: 'Fractal Design Meshify C',
            brand: 'Fractal Design',
            price: 8999,
            type: 'Mid Tower',
            maxGpuLength: '315mm',
            image: 'https://m.media-amazon.com/images/I/71N1DRGAC7L._SL1500_.jpg',
            specifications: { material: 'Steel + Tempered Glass', motherboardSupport: 'ATX, Micro-ATX, Mini-ITX', expansionSlots: 7, includedFans: 2, maxFans: 7, usbPorts: '2x USB 3.0', dimensions: '409 x 217 x 453mm', maxCpuCoolerHeight: '170mm', maxPsuLength: '175mm', dustFilters: true, toolLessDesign: false }
        },
        {
            id: 'coolermaster-mb511',
            name: 'Cooler Master MasterBox MB511',
            brand: 'Cooler Master',
            price: 5999,
            type: 'Mid Tower',
            maxGpuLength: '410mm',
            image: 'https://m.media-amazon.com/images/I/71N1DRGAC7L._SL1500_.jpg',
            specifications: { material: 'Steel + Mesh', motherboardSupport: 'ATX, Micro-ATX, Mini-ITX', expansionSlots: 7, includedFans: 3, maxFans: 6, usbPorts: '2x USB 3.0', dimensions: '496 x 217 x 469mm', maxCpuCoolerHeight: '165mm', maxPsuLength: '180mm', dustFilters: true, toolLessDesign: false }
        }
    ]
};

// Current build state
let currentBuild = {
    cpu: null,
    motherboard: null,
    gpu: null,
    ram: null,
    storage: null,
    psu: null,
    case: null
};

// Filter and sort state
let filterState = {
    cpu: {
        brand: '',
        socket: '',
        priceRange: '',
        sortBy: 'price-asc'
    },
    motherboard: {
        brand: '',
        socket: '',
        formFactor: '',
        priceRange: '',
        sortBy: 'price-asc'
    },
    gpu: {
        brand: '',
        vram: '',
        priceRange: '',
        sortBy: 'price-asc'
    },
    ram: {
        brand: '',
        type: '',
        speed: '',
        priceRange: '',
        sortBy: 'price-asc'
    },
    storage: {
        brand: '',
        type: '',
        interface: '',
        priceRange: '',
        sortBy: 'price-asc'
    },
    psu: {
        brand: '',
        wattage: '',
        efficiency: '',
        priceRange: '',
        sortBy: 'price-asc'
    },
    case: {
        brand: '',
        type: '',
        maxGpuLength: '',
        priceRange: '',
        sortBy: 'price-asc'
    }
};

// Price history tracking
const priceHistory = {};

// Function to update price history
function updatePriceHistory(part) {
    const today = new Date().toISOString().split('T')[0];
    if (!priceHistory[part.name]) {
        priceHistory[part.name] = [];
    }
    
    // Add new price if it's different from the last recorded price
    const lastPrice = priceHistory[part.name][priceHistory[part.name].length - 1];
    if (!lastPrice || lastPrice.price !== part.price) {
        priceHistory[part.name].push({
            date: today,
            price: part.price,
            platform: 'current'
        });
        
        // Keep only last 30 days of history
        if (priceHistory[part.name].length > 30) {
            priceHistory[part.name].shift();
        }
    }
}

// Function to show price history
function showPriceHistory(part) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto';
    
    const history = priceHistory[part.name] || [];
    
    modalContent.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-semibold">Price History - ${part.name}</h3>
            <button onclick="this.parentElement.parentElement.parentElement.remove()" class="text-gray-500 hover:text-gray-700">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="space-y-4">
            ${history.length > 0 ? `
                <div class="grid grid-cols-3 gap-4 font-semibold text-gray-700">
                    <div>Date</div>
                    <div>Price</div>
                    <div>Change</div>
                </div>
                ${history.map((entry, index) => {
                    const prevPrice = index > 0 ? history[index - 1].price : entry.price;
                    const change = entry.price - prevPrice;
                    const changeClass = change > 0 ? 'text-red-600' : change < 0 ? 'text-green-600' : 'text-gray-600';
                    const changeSymbol = change > 0 ? '↑' : change < 0 ? '↓' : '→';
                    
                    return `
                        <div class="grid grid-cols-3 gap-4">
                            <div>${entry.date}</div>
                            <div>₹${entry.price.toLocaleString()}</div>
                            <div class="${changeClass}">
                                ${changeSymbol} ₹${Math.abs(change).toLocaleString()}
                            </div>
                        </div>
                    `;
                }).join('')}
            ` : `
                <div class="text-center text-gray-500">
                    No price history available
                </div>
            `}
        </div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// Function to filter parts based on compatibility
function filterParts(type) {
    let filteredParts = [...partsDatabase[type]];
    // CPU-Motherboard compatibility
    if (type === 'motherboard' && currentBuild.cpu) {
        filteredParts = filteredParts.filter(part => part.socket === currentBuild.cpu.socket);
    }
    if (type === 'cpu' && currentBuild.motherboard) {
        filteredParts = filteredParts.filter(part => part.socket === currentBuild.motherboard.socket);
    }
    // Motherboard-RAM compatibility
    if (type === 'ram' && currentBuild.motherboard) {
        filteredParts = filteredParts.filter(part => part.type === currentBuild.motherboard.specifications.memoryType);
    }
    if (type === 'motherboard' && currentBuild.ram) {
        filteredParts = filteredParts.filter(part => part.specifications.memoryType === currentBuild.ram.type);
    }
    // GPU-Case compatibility
    if (type === 'case' && currentBuild.gpu) {
        filteredParts = filteredParts.filter(part => {
            const maxGpuLength = parseInt(part.maxGpuLength);
            const gpuLength = parseInt(currentBuild.gpu.specifications.length);
            return maxGpuLength >= gpuLength;
        });
    }
    if (type === 'gpu' && currentBuild.case) {
        filteredParts = filteredParts.filter(part => {
            const maxGpuLength = parseInt(currentBuild.case.maxGpuLength);
            const gpuLength = parseInt(part.specifications.length);
            return maxGpuLength >= gpuLength;
        });
    }
    // PSU wattage
    if (type === 'psu') {
        let totalPower = 50;
        if (currentBuild.cpu) totalPower += currentBuild.cpu.tdp || 0;
        if (currentBuild.gpu) totalPower += currentBuild.gpu.tdp || 0;
        totalPower = Math.ceil(totalPower * 1.3);
        filteredParts = filteredParts.filter(part => part.wattage >= totalPower);
    }
    return filteredParts;
}

// Function to calculate total power consumption
function calculateTotalPower() {
    let totalPower = 50; // Base system power

    if (currentBuild.cpu) {
        totalPower += currentBuild.cpu.tdp || 0;
    }

    if (currentBuild.gpu) {
        totalPower += currentBuild.gpu.tdp || 0;
    }

    // Add 30% headroom
    return Math.ceil(totalPower * 1.3);
}

// Function to get specifications HTML
function getSpecificationsHTML(type, part) {
    let specs = [];
    // If specifications exist, use them
    if (part.specifications) {
        switch(type) {
            case 'cpu':
                specs = [
                    `<span class="text-sm text-gray-600"><i class="fas fa-microchip mr-1"></i>${part.specifications.cores} Cores</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-bolt mr-1"></i>${part.specifications.baseSpeed} Base</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-tachometer-alt mr-1"></i>${part.specifications.boostSpeed} Boost</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-memory mr-1"></i>${part.specifications.cache} Cache</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-plug mr-1"></i>${part.socket} Socket</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-bolt mr-1"></i>${part.tdp}W TDP</span>`
                ];
                break;
            case 'motherboard':
                specs = [
                    `<span class="text-sm text-gray-600"><i class="fas fa-microchip mr-1"></i>${part.specifications.chipset}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-memory mr-1"></i>${part.specifications.memoryType}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-plug mr-1"></i>${part.specifications.m2Slots} M.2 Slots</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-network-wired mr-1"></i>${part.specifications.pciSlots}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-wifi mr-1"></i>${part.specifications.wifi ? 'WiFi' : 'No WiFi'}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-plug mr-1"></i>${part.socket} Socket</span>`
                ];
                break;
            case 'gpu':
                specs = [
                    `<span class="text-sm text-gray-600"><i class="fas fa-memory mr-1"></i>${part.vram}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-tachometer-alt mr-1"></i>${part.specifications.boostClock}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-bolt mr-1"></i>${part.tdp}W TDP</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-plug mr-1"></i>${part.specifications.powerConnector}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-desktop mr-1"></i>${part.specifications.ports}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-ruler-horizontal mr-1"></i>${part.specifications.length}</span>`
                ];
                break;
            case 'ram':
                specs = [
                    `<span class="text-sm text-gray-600"><i class="fas fa-memory mr-1"></i>${part.capacity}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-tachometer-alt mr-1"></i>${part.speed}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-clock mr-1"></i>CL${part.specifications.timing}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-bolt mr-1"></i>${part.specifications.voltage}V</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-palette mr-1"></i>${part.specifications.rgb ? 'RGB' : 'No RGB'}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-microchip mr-1"></i>${part.specifications.modules}</span>`
                ];
                break;
            case 'storage':
                specs = [
                    `<span class="text-sm text-gray-600"><i class="fas fa-hdd mr-1"></i>${part.capacity}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-tachometer-alt mr-1"></i>${part.specifications.readSpeed} Read</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-tachometer-alt mr-1"></i>${part.specifications.writeSpeed} Write</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-plug mr-1"></i>${part.interface}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-history mr-1"></i>${part.specifications.endurance} TBW</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-microchip mr-1"></i>${part.specifications.formFactor}</span>`
                ];
                break;
            case 'psu':
                specs = [
                    `<span class="text-sm text-gray-600"><i class="fas fa-bolt mr-1"></i>${part.wattage}W</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-certificate mr-1"></i>${part.efficiency}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-plug mr-1"></i>${part.specifications.modular}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-shield-alt mr-1"></i>${part.specifications.protection}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-clock mr-1"></i>${part.specifications.warranty}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-fan mr-1"></i>${part.specifications.fanSize}</span>`
                ];
                break;
            case 'case':
                specs = [
                    `<span class="text-sm text-gray-600"><i class="fas fa-box mr-1"></i>${part.type}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-ruler-horizontal mr-1"></i>Max GPU: ${part.maxGpuLength}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-fan mr-1"></i>${part.specifications.includedFans} Fans</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-plug mr-1"></i>${part.specifications.usbPorts}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-layer-group mr-1"></i>${part.specifications.motherboardSupport}</span>`,
                    `<span class="text-sm text-gray-600"><i class="fas fa-ruler-combined mr-1"></i>${part.specifications.dimensions}</span>`
                ];
                break;
        }
    } else {
        // Fallback for basic info if specifications are missing
        if (type === 'cpu') {
            if (part.cores) specs.push(`<span class="text-sm text-gray-600">Cores: ${part.cores}</span>`);
            if (part.threads) specs.push(`<span class="text-sm text-gray-600">Threads: ${part.threads}</span>`);
            if (part.socket) specs.push(`<span class="text-sm text-gray-600">Socket: ${part.socket}</span>`);
            if (part.tdp) specs.push(`<span class="text-sm text-gray-600">TDP: ${part.tdp}W</span>`);
        }
        if (type === 'motherboard') {
            if (part.socket) specs.push(`<span class="text-sm text-gray-600">Socket: ${part.socket}</span>`);
            if (part.formFactor) specs.push(`<span class="text-sm text-gray-600">Form Factor: ${part.formFactor}</span>`);
        }
        if (type === 'ram') {
            if (part.type) specs.push(`<span class="text-sm text-gray-600">Type: ${part.type}</span>`);
            if (part.speed) specs.push(`<span class="text-sm text-gray-600">Speed: ${part.speed}</span>`);
        }
        if (type === 'gpu') {
            if (part.vram) specs.push(`<span class="text-sm text-gray-600">VRAM: ${part.vram}</span>`);
            if (part.tdp) specs.push(`<span class="text-sm text-gray-600">TDP: ${part.tdp}W</span>`);
        }
        if (type === 'storage') {
            if (part.type) specs.push(`<span class="text-sm text-gray-600">Type: ${part.type}</span>`);
            if (part.interface) specs.push(`<span class="text-sm text-gray-600">Interface: ${part.interface}</span>`);
        }
        if (type === 'psu') {
            if (part.wattage) specs.push(`<span class="text-sm text-gray-600">Wattage: ${part.wattage}</span>`);
            if (part.efficiency) specs.push(`<span class="text-sm text-gray-600">Efficiency: ${part.efficiency}</span>`);
        }
        if (type === 'case') {
            if (part.type) specs.push(`<span class="text-sm text-gray-600">Type: ${part.type}</span>`);
            if (part.maxGpuLength) specs.push(`<span class="text-sm text-gray-600">Max GPU: ${part.maxGpuLength}</span>`);
        }
    }
    return `<div class="flex flex-wrap gap-2">${specs.join('')}</div>`;
}

// Function to show component selection modal
function selectComponent(type) {
    if (!type || !partsDatabase[type]) {
        console.error('Invalid component type:', type);
        return;
    }

    // Create modal container
    const modal = document.createElement('div');
    modal.id = 'parts-modal';
    modal.className = 'fixed inset-0 z-50 overflow-auto flex items-center justify-center p-4';
    
    // Get filter options for this component type
    const filterOptions = getFilterOptions(type);
    
    modal.innerHTML = `
        <div class="fixed inset-0 bg-black bg-opacity-50" onclick="document.getElementById('parts-modal').remove()"></div>
        <div class="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b">
                <h3 class="text-xl font-semibold text-gray-900">Select ${type.toUpperCase()}</h3>
                <button onclick="document.getElementById('parts-modal').remove()" class="text-gray-400 hover:text-gray-500">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <!-- Filters -->
            <div class="border-b p-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${filterOptions.map(filter => `
                        <div class="flex flex-col">
                            <label class="block text-sm font-medium text-gray-700 mb-1">${filter.label}:</label>
                            <select 
                                class="form-select rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                onchange="updateFilters('${type}', '${filter.key}', this.value)"
                            >
                                <option value="">All</option>
                                ${filter.options.map(opt => `
                                    <option value="${opt}">${opt}</option>
                                `).join('')}
                            </select>
                        </div>
                    `).join('')}
                    
                    <!-- Price Range -->
                    <div class="flex flex-col">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Price Range:</label>
                        <select 
                            class="form-select rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            onchange="updateFilters('${type}', 'priceRange', this.value)"
                        >
                            <option value="">All</option>
                            <option value="0-15000">Under ₹15,000</option>
                            <option value="15000-30000">₹15,000 - ₹30,000</option>
                            <option value="30000-50000">₹30,000 - ₹50,000</option>
                            <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                            <option value="100000-">Above ₹1,00,000</option>
                        </select>
                    </div>

                    <!-- Sort By -->
                    <div class="flex flex-col">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Sort By:</label>
                        <select 
                            class="form-select rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            onchange="updateFilters('${type}', 'sortBy', this.value)"
                        >
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="name-asc">Name: A to Z</option>
                            <option value="name-desc">Name: Z to A</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Parts List -->
            <div class="flex-1 overflow-y-auto p-4 space-y-4">
                ${renderPartsList(type, filterParts(type))}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Function to get filter options for a component type
function getFilterOptions(type) {
    const parts = partsDatabase[type];
    const options = [];

    switch(type) {
        case 'cpu':
            options.push({
                key: 'brand',
                label: 'Brand',
                options: [...new Set(parts.map(p => p.brand))].sort()
            });
            options.push({
                key: 'socket',
                label: 'Socket',
                options: [...new Set(parts.map(p => p.socket))].sort()
            });
            break;
        case 'motherboard':
            options.push({
                key: 'brand',
                label: 'Brand',
                options: [...new Set(parts.map(p => p.brand))].sort()
            });
            options.push({
                key: 'socket',
                label: 'Socket',
                options: [...new Set(parts.map(p => p.socket))].sort()
            });
            options.push({
                key: 'formFactor',
                label: 'Form Factor',
                options: [...new Set(parts.map(p => p.formFactor))].sort()
            });
            break;
        case 'gpu':
            options.push({
                key: 'brand',
                label: 'Brand',
                options: [...new Set(parts.map(p => p.brand))].sort()
            });
            options.push({
                key: 'vram',
                label: 'VRAM',
                options: [...new Set(parts.map(p => p.vram))].sort()
            });
            break;
        case 'ram':
            options.push({
                key: 'brand',
                label: 'Brand',
                options: [...new Set(parts.map(p => p.brand))].sort()
            });
            options.push({
                key: 'type',
                label: 'Type',
                options: [...new Set(parts.map(p => p.type))].sort()
            });
            options.push({
                key: 'speed',
                label: 'Speed',
                options: [...new Set(parts.map(p => p.speed))].sort()
            });
            break;
        case 'storage':
            options.push({
                key: 'brand',
                label: 'Brand',
                options: [...new Set(parts.map(p => p.brand))].sort()
            });
            options.push({
                key: 'type',
                label: 'Type',
                options: [...new Set(parts.map(p => p.type))].sort()
            });
            options.push({
                key: 'interface',
                label: 'Interface',
                options: [...new Set(parts.map(p => p.interface))].sort()
            });
            break;
        case 'psu':
            options.push({
                key: 'brand',
                label: 'Brand',
                options: [...new Set(parts.map(p => p.brand))].sort()
            });
            options.push({
                key: 'wattage',
                label: 'Wattage',
                options: [...new Set(parts.map(p => p.wattage))].sort()
            });
            options.push({
                key: 'efficiency',
                label: 'Efficiency',
                options: [...new Set(parts.map(p => p.efficiency))].sort()
            });
            break;
        case 'case':
            options.push({
                key: 'brand',
                label: 'Brand',
                options: [...new Set(parts.map(p => p.brand))].sort()
            });
            options.push({
                key: 'type',
                label: 'Type',
                options: [...new Set(parts.map(p => p.type))].sort()
            });
            break;
    }

    return options;
}

// Function to update filters
function updateFilters(type, filterKey, value) {
    if (!filterState[type]) {
        filterState[type] = {};
    }
    filterState[type][filterKey] = value;
    
    const modal = document.getElementById('parts-modal');
    if (modal) {
        const partsList = modal.querySelector('.space-y-4');
        if (partsList) {
            partsList.innerHTML = renderPartsList(type, filterParts(type));
        }
    }
}

// Function to update total price
function updateTotalPrice() {
    const total = Object.values(currentBuild)
        .filter(part => part !== null)
        .reduce((sum, part) => sum + (part?.price || 0), 0);
    
    const totalElements = document.querySelectorAll('#total-price');
    totalElements.forEach(element => {
        if (element) {
            element.textContent = total.toLocaleString();
        }
    });
}

// Function to check compatibility
function checkCompatibility() {
    const compatibilityDiv = document.getElementById('compatibility-check');
    const issues = [];
    let totalPower = 50; // Base system power

    // Get selected components
    const selectedCPU = currentBuild.cpu;
    const selectedMobo = currentBuild.motherboard;
    const selectedRAM = currentBuild.ram;
    const selectedGPU = currentBuild.gpu;
    const selectedPSU = currentBuild.psu;
    const selectedCase = currentBuild.case;

    // CPU and Motherboard Socket Compatibility
    if (selectedCPU && selectedMobo) {
        if (selectedCPU.socket !== selectedMobo.socket) {
            issues.push(`CPU socket ${selectedCPU.socket} is not compatible with motherboard socket ${selectedMobo.socket}`);
        }
        totalPower += selectedCPU.tdp || 0;
    }

    // RAM Compatibility
    if (selectedRAM && selectedMobo) {
        if (selectedRAM.type !== selectedMobo.memoryType) {
            issues.push(`RAM type ${selectedRAM.type} is not compatible with motherboard memory type ${selectedMobo.memoryType}`);
        }
        if (selectedRAM.speed > selectedMobo.maxMemorySpeed) {
            issues.push(`RAM speed ${selectedRAM.speed}MHz exceeds motherboard's maximum supported speed of ${selectedMobo.maxMemorySpeed}MHz`);
        }
        totalPower += 10; // Estimated RAM power consumption
    }

    // GPU Power and Size
    if (selectedGPU) {
        totalPower += selectedGPU.tdp || 0;
        if (selectedCase && selectedGPU.length > selectedCase.maxGPULength) {
            issues.push(`GPU length ${selectedGPU.length}mm exceeds case's maximum GPU length of ${selectedCase.maxGPULength}mm`);
        }
    }

    // Case and Motherboard Form Factor
    if (selectedCase && selectedMobo) {
        if (!selectedCase.supportedFormFactors.includes(selectedMobo.formFactor)) {
            issues.push(`Case does not support motherboard form factor ${selectedMobo.formFactor}`);
        }
    }

    // PSU Wattage Check
    if (selectedPSU) {
        const recommendedPower = Math.ceil(totalPower * 1.3); // 30% headroom
        if (selectedPSU.wattage < recommendedPower) {
            issues.push(`PSU wattage (${selectedPSU.wattage}W) is insufficient for estimated system power draw (${recommendedPower}W recommended)`);
        }
    }

    // Update power consumption display
    const powerConsumptionElement = document.getElementById('power-consumption');
    if (powerConsumptionElement) {
        powerConsumptionElement.textContent = `${totalPower}W`;
    }

    // Update compatibility display
    if (compatibilityDiv) {
        if (issues.length === 0) {
            compatibilityDiv.innerHTML = `
                <div class="flex items-center p-4 bg-green-100 text-green-700 rounded-lg">
                    <i class="fas fa-check-circle mr-2"></i>
                    <span>All components are compatible!</span>
                </div>`;
        } else {
            compatibilityDiv.innerHTML = `
                <div class="p-4 bg-red-100 text-red-700 rounded-lg">
                    <div class="flex items-center mb-2">
                        <i class="fas fa-exclamation-triangle mr-2"></i>
                        <span class="font-medium">Compatibility Issues Found:</span>
                    </div>
                    <ul class="list-disc list-inside space-y-1">
                        ${issues.map(issue => `<li>${issue}</li>`).join('')}
                    </ul>
                </div>`;
        }
    }

    return issues;
}

// Function to update build progress
function updateBuildProgress() {
    const totalComponents = Object.keys(currentBuild).length;
    const selectedComponents = Object.values(currentBuild).filter(part => part !== null).length;
    const progress = (selectedComponents / totalComponents) * 100;
    
    const progressText = document.getElementById('build-progress');
    const progressBar = document.getElementById('progress-bar');
    
    if (progressText) {
        progressText.textContent = `${Math.round(progress)}%`;
    }
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}

// Function to update estimated power
function updateEstimatedPower() {
    const totalTdp = Object.values(currentBuild)
        .filter(part => part && part.tdp)
        .reduce((sum, part) => sum + part.tdp, 0);
    
    const powerElement = document.getElementById('estimated-power');
    if (powerElement) {
        powerElement.textContent = `${totalTdp}W`;
    }
}

// Function to compare prices on different platforms
function comparePrices(platform) {
    const selectedParts = Object.values(currentBuild).filter(part => part !== null);
    if (selectedParts.length === 0) {
        alert('Please select at least one component to compare prices');
        return;
    }

    // In a real implementation, this would open the respective platform's search page
    // or use their API to fetch current prices
    alert(`Redirecting to ${platform} to compare prices...`);
    
    // Example: Open the first selected part's link for the chosen platform
    if (selectedParts[0][platform]) {
        window.open(selectedParts[0][platform], '_blank');
    }
}

// Function to generate build ID
function generateBuildId() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Initialize filters for a component type
function initializeFilters(type) {
    const parts = partsDatabase[type];
    if (!parts || !Array.isArray(parts)) {
        console.error('No parts found for type:', type);
        return;
    }

    // Get unique brands
    const brands = [...new Set(parts.map(part => part.brand))].sort();
    const brandFilter = document.getElementById('brand-filter');
    if (brandFilter) {
        brandFilter.innerHTML = `
            <option value="">All</option>
            ${brands.map(brand => `<option value="${brand}">${brand}</option>`).join('')}
        `;
        brandFilter.addEventListener('change', () => applyFilters(type));
    }

    // Setup price filter
    const priceFilter = document.getElementById('price-filter');
    if (priceFilter) {
        priceFilter.addEventListener('change', () => applyFilters(type));
    }

    // Setup stock filter
    const stockFilter = document.getElementById('stock-filter');
    if (stockFilter) {
        stockFilter.addEventListener('change', () => applyFilters(type));
    }

    // Initial filter application
    applyFilters(type);
}

// Apply filters to parts list
function applyFilters(type) {
    const parts = partsDatabase[type];
    if (!parts || !Array.isArray(parts)) {
        console.error('No parts found for type:', type);
        return;
    }

    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');
    const stockFilter = document.getElementById('stock-filter');

    let filteredParts = [...parts];

    // Apply brand filter
    if (brandFilter && brandFilter.value) {
        filteredParts = filteredParts.filter(part => part.brand === brandFilter.value);
    }

    // Apply stock filter
    if (stockFilter && stockFilter.value) {
        filteredParts = filteredParts.filter(part => {
            if (stockFilter.value === 'in-stock') return part.inStock;
            if (stockFilter.value === 'out-of-stock') return !part.inStock;
            return true;
        });
    }

    // Apply price sorting
    if (priceFilter && priceFilter.value) {
        filteredParts.sort((a, b) => {
            if (priceFilter.value === 'low-to-high') return a.price - b.price;
            if (priceFilter.value === 'high-to-low') return b.price - a.price;
            return 0;
        });
    }

    // Update parts list
    const partsList = document.getElementById('parts-list');
    if (partsList) {
        partsList.innerHTML = renderPartsList(type, filteredParts);
    }
}

// Function to update build display
function updateBuildDisplay() {
    Object.keys(currentBuild).forEach(type => {
        const selectedElement = document.getElementById(`selected-${type}`);
        if (selectedElement) {
            if (currentBuild[type]) {
                const part = currentBuild[type];
                selectedElement.innerHTML = `
                    <div class="border rounded-lg bg-white p-4">
                        <div class="flex items-start space-x-4">
                            <div class="w-16 h-16 flex-shrink-0">
                                <img src="${part.image || 'https://via.placeholder.com/150'}" 
                                     alt="${part.name}" 
                                     class="w-full h-full object-contain rounded"
                                     onerror="this.src='https://via.placeholder.com/150'">
                            </div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-semibold text-gray-900">${part.name}</h4>
                                        <p class="text-sm text-gray-600">${part.brand}</p>
                                        <p class="text-lg font-bold text-gray-900 mt-2">₹${part.price.toLocaleString()}</p>
                                    </div>
                                    <button onclick="removePart('${type}')" class="text-gray-400 hover:text-gray-600">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                                <div class="mt-2">
                                    ${getSpecificationsHTML(type, part)}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                selectedElement.innerHTML = `
                    <div class="border rounded-lg bg-gray-50 p-4">
                        <button onclick="selectComponent('${type}')" class="w-full text-center text-gray-500 hover:text-blue-600">
                            <i class="fas fa-plus-circle mr-2"></i>
                            Select ${type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    </div>
                `;
            }
        }
    });
    
    updateTotalPrice();
    updateBuildProgress();
    checkCompatibility();
    updateEstimatedPower();
    updatePerformanceAndBottleneck();
}

// Initialize the PC Builder when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing PC Builder...');
    
    // Initialize current build state
    currentBuild = {
        cpu: null,
        motherboard: null,
        gpu: null,
        ram: null,
        storage: null,
        psu: null,
        case: null
    };
    
    // Update the display
    updateBuildDisplay();
    updateCompatibilityDisplay();
    
    // Add event listeners for the buttons
    document.getElementById('new-build')?.addEventListener('click', () => {
        if (confirm('Are you sure you want to start a new build? This will clear your current build.')) {
            initializePCBuilder();
        }
    });
    
    // Initialize filters for each component type
    Object.keys(partsDatabase).forEach(type => {
        initializeFilters(type);
    });
});

// Function to initialize the PC Builder
function initializePCBuilder() {
    currentBuild = {
        cpu: null,
        motherboard: null,
        gpu: null,
        ram: null,
        storage: null,
        psu: null,
        case: null
    };
    
    updateBuildDisplay();
    updateCompatibilityDisplay();
    updateBuildProgress();
    updateEstimatedPower();
}

// Function to update compatibility display
function updateCompatibilityDisplay() {
    const compatibilityDiv = document.getElementById('compatibility-check');
    const issues = checkCompatibility();
    
    if (compatibilityDiv) {
        if (issues.length === 0) {
            compatibilityDiv.innerHTML = `
                <div class="flex items-center p-4 bg-green-100 text-green-700 rounded-lg">
                    <i class="fas fa-check-circle mr-2"></i>
                    <span>All components are compatible!</span>
                </div>`;
        } else {
            compatibilityDiv.innerHTML = `
                <div class="p-4 bg-red-100 text-red-700 rounded-lg">
                    <div class="flex items-center mb-2">
                        <i class="fas fa-exclamation-triangle mr-2"></i>
                        <span class="font-medium">Compatibility Issues Found:</span>
                    </div>
                    <ul class="list-disc list-inside space-y-1">
                        ${issues.map(issue => `<li>${issue}</li>`).join('')}
                    </ul>
                </div>`;
        }
    }
}

// Function to remove a part
function removePart(type) {
    if (currentBuild[type]) {
        currentBuild[type] = null;
        updateBuildDisplay();
    }
}

// Function to select a part
function selectPart(type, part) {
    // Update the current build with the selected part
    currentBuild[type] = part;
    
    // Update price history
    updatePriceHistory(part);
    
    // Update the build display
    updateBuildDisplay();
    
    // Close the modal
    const modal = document.getElementById('parts-modal');
    if (modal) {
        modal.remove();
    }
    
    // Check compatibility after adding the part
    checkCompatibility();
    
    // Update build progress
    updateBuildProgress();
    
    // Update estimated power
    updateEstimatedPower();
}

// Function to render parts list
function renderPartsList(type, parts) {
    return parts.map(part => {
        if (!part || typeof part !== 'object') return '';
        const imageUrl = part.image && part.image.startsWith('http') ? part.image : 'https://via.placeholder.com/80x80?text=No+Image';
        const safePart = JSON.stringify(part).replace(/"/g, '&quot;');
        // Price tracker buttons
        let priceTrackers = '';
        const trackers = [
            { key: 'amazon', label: 'Amazon', color: 'bg-yellow-500' },
            { key: 'mdcomputers', label: 'MDComputers', color: 'bg-green-600' },
            { key: 'vedantcomputers', label: 'Vedant', color: 'bg-blue-700' },
            { key: 'pcstudio', label: 'PCStudio', color: 'bg-purple-700' },
            { key: 'theitdepot', label: 'TheITDepot', color: 'bg-pink-700' },
            { key: 'gamesncomps', label: 'GamesnComps', color: 'bg-red-700' }
        ];
        trackers.forEach(tracker => {
            if (part[tracker.key]) {
                priceTrackers += `<a href="${part[tracker.key]}" target="_blank" class="${tracker.color} text-white px-2 py-1 rounded text-xs mr-1 inline-block mt-1">${tracker.label}</a>`;
            }
        });
        return `
            <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                        <img src="${imageUrl}" 
                             alt="${part.name}" 
                             class="w-full h-full object-contain"
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/80x80?text=No+Image'">
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900">${part.name}</h3>
                                <p class="text-sm text-gray-600">${part.brand}</p>
                            </div>
                            <p class="text-lg font-bold text-gray-900">₹${part.price.toLocaleString()}</p>
                        </div>
                        <div class="mt-2 space-y-1">
                            ${getSpecificationsHTML(type, part)}
                        </div>
                        <div class="mt-2 flex flex-wrap gap-1">
                            ${priceTrackers}
                        </div>
                        <div class="mt-4 flex justify-end">
                            <button onclick='selectPart("${type}", ${safePart})' 
                                    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                                Select
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// At the end of the file, expose selectComponent and selectPart globally
window.selectComponent = selectComponent;
window.selectPart = selectPart;

// --- Save Build and Share Feature ---
function saveBuild() {
    const buildId = generateBuildId();
    const buildData = JSON.stringify(currentBuild);
    localStorage.setItem('pc-build-' + buildId, buildData);
    // Show shareable link
    const url = window.location.origin + window.location.pathname + '?build=' + buildId;
    showShareModal(url);
}

function showShareModal(url) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-md w-full">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold">Build Saved!</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="mb-4">
                <input type="text" value="${url}" readonly class="w-full border rounded px-2 py-1 text-gray-700" id="share-build-link">
            </div>
            <button onclick="navigator.clipboard.writeText(document.getElementById('share-build-link').value)" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full">Copy Link</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Load build from URL if present
(function() {
    const params = new URLSearchParams(window.location.search);
    const buildId = params.get('build');
    if (buildId) {
        const buildData = localStorage.getItem('pc-build-' + buildId);
        if (buildData) {
            try {
                currentBuild = JSON.parse(buildData);
                updateBuildDisplay();
            } catch (e) {}
        }
    }
})();

// Expose saveBuild globally for button use
window.saveBuild = saveBuild;

// --- Estimated Performance and Bottleneck Warning ---

// Add this function to estimate performance based on selected CPU and GPU
function getEstimatedPerformance(cpu, gpu) {
    // Simple mock logic for demonstration (replace with real data or API for production)
    if (!cpu || !gpu) return null;
    // Example FPS/productivity table (very rough, for demo only)
    const cpuTier = cpu.price > 40000 ? 3 : cpu.price > 20000 ? 2 : 1;
    const gpuTier = gpu.price > 60000 ? 3 : gpu.price > 30000 ? 2 : 1;
    const baseFPS = [
        [60, 90, 120], // CPU tier 1
        [80, 120, 160], // CPU tier 2
        [100, 150, 200] // CPU tier 3
    ];
    const games = [
        { name: 'CS:GO', multiplier: 1.2 },
        { name: 'GTA V', multiplier: 1.0 },
        { name: 'Cyberpunk 2077', multiplier: 0.7 },
        { name: 'Valorant', multiplier: 1.5 },
        { name: 'Fortnite', multiplier: 1.1 }
    ];
    const productivity = 100 * cpuTier + 100 * gpuTier;
    return {
        games: games.map(game => ({
            name: game.name,
            fps: Math.round(baseFPS[cpuTier-1][gpuTier-1] * game.multiplier)
        })),
        productivity
    };
}

// Add this function to check for bottleneck
function getBottleneckWarning(cpu, gpu) {
    if (!cpu || !gpu) return null;
    // Simple logic: if price difference is >2x, warn
    const ratio = cpu.price / gpu.price;
    if (ratio > 2) return 'Your CPU is much stronger than your GPU. Consider upgrading your GPU for better balance.';
    if (ratio < 0.5) return 'Your GPU is much stronger than your CPU. Consider upgrading your CPU for better balance.';
    return null;
}

// Add UI update for performance and bottleneck
function updatePerformanceAndBottleneck() {
    const perfDiv = document.getElementById('estimated-performance');
    const bottleneckDiv = document.getElementById('bottleneck-warning');
    const cpu = currentBuild.cpu;
    const gpu = currentBuild.gpu;
    if (perfDiv) {
        if (cpu && gpu) {
            const perf = getEstimatedPerformance(cpu, gpu);
            if (perf) {
                perfDiv.innerHTML = `
                    <div class="mb-2 font-semibold">Estimated Performance:</div>
                    <div class="grid grid-cols-2 gap-2">
                        ${perf.games.map(g => `<div>${g.name}: <span class='font-bold'>${g.fps} FPS</span></div>`).join('')}
                    </div>
                    <div class="mt-2">Productivity Score: <span class='font-bold'>${perf.productivity}</span></div>
                `;
            } else {
                perfDiv.innerHTML = '<div class="text-gray-500">Select CPU and GPU to see performance estimates.</div>';
            }
        } else {
            perfDiv.innerHTML = '<div class="text-gray-500">Select CPU and GPU to see performance estimates.</div>';
        }
    }
    if (bottleneckDiv) {
        const warning = getBottleneckWarning(cpu, gpu);
        if (warning) {
            bottleneckDiv.innerHTML = `<div class="p-2 bg-yellow-100 text-yellow-800 rounded">${warning}</div>`;
        } else {
            bottleneckDiv.innerHTML = '';
        }
    }
}

// Call updatePerformanceAndBottleneck in updateBuildDisplay
const _oldUpdateBuildDisplay = updateBuildDisplay;
updateBuildDisplay = function() {
    _oldUpdateBuildDisplay();
    updatePerformanceAndBottleneck();
};

// --- Placeholder UI for other features ---
// Add these divs to your HTML where appropriate:
// <div id="estimated-performance" class="my-4"></div>
// <div id="bottleneck-warning" class="my-2"></div>
// <div id="build-price-history" class="my-4"></div>
// <div id="pdf-export" class="my-4"></div>
// <div id="community-builds" class="my-4"></div>
// <div id="wishlist-compare" class="my-4"></div>
// <div id="cooler-psu-case-compat" class="my-4"></div>
// (You can add these to your main builder page for now)

// --- Build Price History Tracking and Chart ---
// Track total build price over time
function trackBuildPrice() {
    const total = Object.values(currentBuild)
        .filter(part => part !== null)
        .reduce((sum, part) => sum + (part?.price || 0), 0);
    const today = new Date().toISOString().split('T')[0];
    let history = JSON.parse(localStorage.getItem('build-price-history') || '[]');
    if (!history.length || history[history.length-1].date !== today || history[history.length-1].price !== total) {
        history.push({ date: today, price: total });
        if (history.length > 30) history.shift();
        localStorage.setItem('build-price-history', JSON.stringify(history));
    }
}

function showBuildPriceHistory() {
    const div = document.getElementById('build-price-history');
    if (!div) return;
    const history = JSON.parse(localStorage.getItem('build-price-history') || '[]');
    if (!history.length) {
        div.innerHTML = '<div class="text-gray-500">No price history yet.</div>';
        return;
    }
    // Simple table (replace with Chart.js for a real chart)
    div.innerHTML = `
        <div class="mb-2 font-semibold">Build Price History (last 30 days):</div>
        <table class="w-full text-sm">
            <tr><th class="text-left">Date</th><th class="text-left">Price</th></tr>
            ${history.map(h => `<tr><td>${h.date}</td><td>₹${h.price.toLocaleString()}</td></tr>`).join('')}
        </table>
    `;
}

// --- PDF Export ---
function exportBuildPDF() {
    let text = 'PC Build\n\n';
    Object.entries(currentBuild).forEach(([type, part]) => {
        if (part) {
            text += `${type.toUpperCase()}: ${part.name} (₹${part.price})\n`;
        }
    });
    text += `\nTotal Price: ₹${Object.values(currentBuild).filter(p=>p).reduce((s,p)=>s+p.price,0).toLocaleString()}`;
    // Try jsPDF, else fallback to text download
    if (window.jspdf && window.jspdf.jsPDF) {
        const doc = new window.jspdf.jsPDF();
        doc.text(text, 10, 10);
        doc.save('pc-build.pdf');
    } else {
        const blob = new Blob([text], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'pc-build.txt';
        a.click();
    }
}

// --- Community Builds ---
const communityBuilds = [
    {
        name: 'Budget Gaming',
        build: {
            cpu: partsDatabase.cpu.find(p => p.name.includes('i3-12100F')),
            motherboard: partsDatabase.motherboard.find(p => p.name.includes('B660')) || partsDatabase.motherboard[0],
            gpu: partsDatabase.gpu.find(p => p.name.includes('RTX 3050')),
            ram: partsDatabase.ram[0],
            storage: partsDatabase.storage[0],
            psu: partsDatabase.psu[0],
            case: partsDatabase.case[0]
        }
    },
    {
        name: 'High-End AMD',
        build: {
            cpu: partsDatabase.cpu.find(p => p.name.includes('Ryzen 9')),
            motherboard: partsDatabase.motherboard.find(p => p.name.includes('X570')) || partsDatabase.motherboard[0],
            gpu: partsDatabase.gpu.find(p => p.name.includes('RX 6800')),
            ram: partsDatabase.ram[0],
            storage: partsDatabase.storage[0],
            psu: partsDatabase.psu[0],
            case: partsDatabase.case[0]
        }
    }
];
function showCommunityBuilds() {
    const div = document.getElementById('community-builds');
    if (!div) return;
    div.innerHTML = '<div class="mb-2 font-semibold">Community Builds:</div>' +
        communityBuilds.map(b => `
            <div class="mb-2 p-2 border rounded">
                <div class="font-bold">${b.name}</div>
                <button class="bg-blue-600 text-white px-2 py-1 rounded mt-1" onclick='importCommunityBuild("${b.name}")'>Import</button>
            </div>
        `).join('');
}
window.importCommunityBuild = function(name) {
    const build = communityBuilds.find(b => b.name === name);
    if (build) {
        currentBuild = { ...build.build };
        updateBuildDisplay();
    }
};

// --- Wishlist/Compare ---
function saveToWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('pc-wishlist') || '[]');
    wishlist.push(JSON.parse(JSON.stringify(currentBuild)));
    localStorage.setItem('pc-wishlist', JSON.stringify(wishlist));
    showWishlist();
}
function showWishlist() {
    const div = document.getElementById('wishlist-compare');
    if (!div) return;
    let wishlist = JSON.parse(localStorage.getItem('pc-wishlist') || '[]');
    if (!wishlist.length) {
        div.innerHTML = '<div class="text-gray-500">No builds in wishlist.</div>';
        return;
    }
    div.innerHTML = '<div class="mb-2 font-semibold">Wishlist Builds:</div>' +
        wishlist.map((build, i) => `
            <div class="mb-2 p-2 border rounded">
                <div>Build #${i+1}</div>
                <button class="bg-blue-600 text-white px-2 py-1 rounded mt-1" onclick='loadWishlistBuild(${i})'>Load</button>
                <button class="bg-red-600 text-white px-2 py-1 rounded mt-1 ml-2" onclick='deleteWishlistBuild(${i})'>Delete</button>
            </div>
        `).join('');
}
window.loadWishlistBuild = function(i) {
    let wishlist = JSON.parse(localStorage.getItem('pc-wishlist') || '[]');
    if (wishlist[i]) {
        currentBuild = wishlist[i];
        updateBuildDisplay();
    }
};
window.deleteWishlistBuild = function(i) {
    let wishlist = JSON.parse(localStorage.getItem('pc-wishlist') || '[]');
    wishlist.splice(i, 1);
    localStorage.setItem('pc-wishlist', JSON.stringify(wishlist));
    showWishlist();
};

// --- Cooler/PSU/Case Compatibility Warnings (placeholder) ---
function showCoolerPsuCaseCompat() {
    const div = document.getElementById('cooler-psu-case-compat');
    if (!div) return;
    // Placeholder: In real app, check cooler height, PSU length, etc.
    div.innerHTML = '<div class="text-gray-500">(Compatibility checks for cooler/PSU/case coming soon!)</div>';
}

// --- Update all UI sections after build change ---
const _oldUpdateBuildDisplay2 = updateBuildDisplay;
updateBuildDisplay = function() {
    _oldUpdateBuildDisplay2();
    updatePerformanceAndBottleneck();
    trackBuildPrice();
    showBuildPriceHistory();
    showCommunityBuilds();
    showWishlist();
    showCoolerPsuCaseCompat();
};

// --- Expose new features globally for button use ---
window.exportBuildPDF = exportBuildPDF;
window.saveToWishlist = saveToWishlist;

// --- Add placeholder UI divs (add these to your HTML if not present) ---
// <div id="estimated-performance" class="my-4"></div>
// <div id="bottleneck-warning" class="my-2"></div>
// <div id="build-price-history" class="my-4"></div>
// <div id="pdf-export" class="my-4"></div>
// <div id="community-builds" class="my-4"></div>
// <div id="wishlist-compare" class="my-4"></div>
// <div id="cooler-psu-case-compat" class="my-4"></div>