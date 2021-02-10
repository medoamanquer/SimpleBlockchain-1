/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block {
    constructor(data) {
        this.height = 0;
        this.timeStamp = '';
        this.data = data;
        this.previousHash = '0x';
        this.hash = '';
    }
}
module.exports = Block