declare module "react-native-bluetooth-escpos-printer" {
  namespace BluetoothEscposPrinter {
    enum DEVICE_WIDTH {
      WIDTH_58 = 384,
      WIDTH_80 = 576,
    }

    enum ERROR_CORRECTION {
      L = 1,
      M = 0,
      Q = 3,
      H = 2,
    }

    enum BARCODETYPE {
      UPC_A = 65, // 11<=n<=12
      UPC_E = 66, // 11<=n<=12
      JAN13 = 67, // 12<=n<=12
      JAN8 = 68, // 7<=n<=8
      CODE39 = 69, // 1<=n<=255
      ITF = 70, // 1<=n<=255(even numbers)
      CODABAR = 71, // 1<=n<=255
      CODE93 = 72, // 1<=n<=255
      CODE128 = 73, // 2<=n<=255
    }

    enum ROTATION {
      OFF = 0,
      ON = 1,
    }

    enum ALIGN {
      LEFT = 0,
      CENTER = 1,
      RIGHT = 2,
    }

    interface IPrintTextOptions {
      encoding?: string; // Text encoding. Default: GBK
      codepage?: number; // Codepage using. Default 0
      widthtimes?: number; // Text font mul times in width. Default 0
      heigthtimes?: number; // Text font mul times in height. Default 0
      fonttype?: number; // Text font type. Default 0
    }

    interface IPrintPicOptions {
      width: number;
      left: number;
    }

    function printerInit(): Promise<void>;

    /**
     * Printer the buffer data and feed (feed lines).
     */
    function printAndFeed(feed: number): Promise<void>;

    /**
     * Set the printer left spaces.
     */
    function printerLeftSpace(space: number): Promise<void>;

    /**
     * Set the spaces between lines.
     */
    function printerLineSpace(space: number): Promise<void>;
    /**
     * Set the spaces between lines.
     */
    function printerLineSpace(space: number): Promise<void>;

    /**
     * Set the underline of the text
     *
     * @param line 0: off, 1: on, 2: deeper.
     */
    function printerUnderLine(line: 0 | 1 | 2): Promise<void>;

    function selfTest(callback: (isConnected: boolean) => void): void;

    /**
     * Set the printer alignment.
     * Does not work on printPic() method.
     */
    function printerAlign(align: ALIGN): Promise<void>;

    function printText(text: string, options: IPrintTextOptions): Promise<void>;

    /**
     * @param columnWidths Configs the width of each column, calculate by english character length.
     * Ex: the width of 'abcdef' is 5, the width of '中文' is 4.
     * @param columnAligns => Alignment of each column.
     * @param columnTexts => The texts of each colunm to print.
     * @param options text print config options, the same of printText() options.
     */
    function printColumn(
      columnWidths: Array<number>,
      columnAligns: Array<ALIGN>,
      columnTexts: Array<string>,
      options: IPrintTextOptions,
    ): Promise<void>;

    function setWidth(width: number): Promise<void>;

    /**
     * Prints the image which is encoded by base64, without schema.
     * options: contains the params that may use in printing pic.
     *
     * width: the pic width, basic on devices width(dots, 58mm-384);
     * left: the left padding of the pic for the printing position adjustment.
     */
    function printPic(
      base64encodeStr: string,
      options: IPrintPicOptions,
    ): Promise<void>;

    function rotate(): Promise<void>;

    function setBlob(weight: number): Promise<void>;

    function printQRCode(
      content: string,
      size: number,
      correctionLevel: number,
    ): Promise<void>;

    function printBarCode(
      str: string,
      nType: number,
      nWidthX: number,
      nHeight: number,
      nHriFontType: number,
      nHriFontPosition: number,
    ): Promise<void>;

    function openDrawer(
      nMode: number,
      nTime1: number,
      nTime2: number,
    ): Promise<void>;

    function cutOnePoint(): Promise<void>;
  }

  namespace BluetoothManager {
    const EVENT_DEVICE_ALREADY_PAIRED = "EVENT_DEVICE_ALREADY_PAIRED";
    const EVENT_DEVICE_FOUND = "EVENT_DEVICE_FOUND";
    const EVENT_CONNECTION_LOST = "EVENT_CONNECTION_LOST";
    const EVENT_BLUETOOTH_NOT_SUPPORT = "EVENT_BLUETOOTH_NOT_SUPPORT";
    const EVENT_DEVICE_DISCOVER_DONE = "EVENT_DEVICE_DISCOVER_DONE";
    const EVENT_UNABLE_CONNECT = "EVENT_UNABLE_CONNECT";
    const EVENT_CONNECTED = "EVENT_CONNECTED";

    function checkBluetoothEnabled(): Promise<boolean>;
    function isBluetoothEnabled(): Promise<boolean>;
    function unpaire(address: string): Promise<boolean>;
    

    function enableBluetooth(): Promise<string[] | null>;

    function disableBluetooth(): Promise<void>;

    /**
     * Return the address of the currently connected device
     */
    function getConnectedDeviceAddress(): Promise<void>;

    // TODO: change string to object
    function scanDevices(): Promise<{found: string,paired: string}>; // '{found:[],paired:[]}'

    function connect(address: string): Promise<void>;

    function disconnect(address: string): Promise<void>;
  }

  namespace BluetoothTscPrinter {
    enum DIRECTION {
      FORWARD = 0,
      BACKWARD = 1,
    }

    enum DENSITY {
      DNESITY0 = 0,
      DNESITY1 = 1,
      DNESITY2 = 2,
      DNESITY3 = 3,
      DNESITY4 = 4,
      DNESITY5 = 5,
      DNESITY6 = 6,
      DNESITY7 = 7,
      DNESITY8 = 8,
      DNESITY9 = 9,
      DNESITY10 = 10,
      DNESITY11 = 11,
      DNESITY12 = 12,
      DNESITY13 = 13,
      DNESITY14 = 14,
      DNESITY15 = 15,
    }

    enum BARCODETYPE {
      CODE128 = "128",
      CODE128M = "128M",
      EAN128 = "EAN128",
      ITF25 = "25",
      ITF25C = "25C",
      CODE39 = "39",
      CODE39C = "39C",
      CODE39S = "39S",
      CODE93 = "93",
      EAN13 = "EAN13",
      EAN13_2 = "EAN13+2",
      EAN13_5 = "EAN13+5",
      EAN8 = "EAN8",
      EAN8_2 = "EAN8+2",
      EAN8_5 = "EAN8+5",
      CODABAR = "CODA",
      POST = "POST",
      UPCA = "EAN13",
      UPCA_2 = "EAN13+2",
      UPCA_5 = "EAN13+5",
      UPCE = "EAN13",
      UPCE_2 = "EAN13+2",
      UPCE_5 = "EAN13+5",
      CPOST = "CPOST",
      MSI = "MSI",
      MSIC = "MSIC",
      PLESSEY = "PLESSEY",
      ITF14 = "ITF14",
      EAN14 = "EAN14",
    }
    enum FONTTYPE {
      FONT_1 = "1",
      FONT_2 = "2",
      FONT_3 = "3",
      FONT_4 = "4",
      FONT_5 = "5",
      FONT_6 = "6",
      FONT_7 = "7",
      FONT_8 = "8",
      SIMPLIFIED_CHINESE = "TSS24.BF2",
      TRADITIONAL_CHINESE = "TST24.BF2",
      KOREAN = "K",
    }
    enum EEC {
      LEVEL_L = "L",
      LEVEL_M = "M",
      LEVEL_Q = "Q",
      LEVEL_H = "H",
    }
    enum ROTATION {
      ROTATION_0 = 0,
      ROTATION_90 = 90,
      ROTATION_180 = 180,
      ROTATION_270 = 270,
    }
    enum FONTMUL {
      MUL_1 = 1,
      MUL_2 = 2,
      MUL_3 = 3,
      MUL_4 = 4,
      MUL_5 = 5,
      MUL_6 = 6,
      MUL_7 = 7,
      MUL_8 = 8,
      MUL_9 = 9,
      MUL_10 = 10,
    }
    enum BITMAP_MODE {
      OVERWRITE = 0,
      OR = 1,
      XOR = 2,
    }
    enum PRINT_SPEED {
      SPEED1DIV5 = 1,
      SPEED2 = 2,
      SPEED3 = 3,
      SPEED4 = 4,
    }
    enum TEAR {
      ON = "ON",
      OFF = "OFF",
    }
    enum READABLE {
      DISABLE = 0,
      ENABLE = 1,
    }

    interface IPrintLabelOptions {
      width?: number;
      height?: number;
      gap?: number;
      direction?: DIRECTION;
      reference?: [number, number];
      tear?: TEAR;
      sound?: number;
      text?: Array<{
        text: string;
        x: number;
        y: number;
        fonttype: FONTTYPE;
        rotation: ROTATION;
        xscal: FONTMUL;
        yscal: FONTMUL;
      }>;
      qrcode?: Array<{
        x: number;
        y: number;
        level: EEC;
        width: number;
        rotation: ROTATION;
        code: string;
      }>;
      barcode?: Array<{
        x: number;
        y: number;
        type: BARCODETYPE;
        height: number;
        readable: number;
        rotation: ROTATION;
        code: string;
      }>;
      image?: Array<{
        x: number;
        y: number;
        mode: BITMAP_MODE;
        width: number;
        image: string;
      }>;
    }

    function printLabel(options: IPrintLabelOptions): Promise<void>;
  }
}
