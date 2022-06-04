/* Represents a Hexagon. */
class Hex {
    q: number;
    r: number;
    s: number;
    type: string;

    /**
     * Creates a new Hex object.
     * 
     * @param q - The first co-ordinate.
     * @param r - The second co-ordinate.
     * @param s - The third co-ordinate.
     * @param type - The type of the hex.
     */
    constructor(q: number, r: number, s: number, type: string) {
        this.q = q;
        this.r = r;
        this.s = s;
        this.type = type;
    }
}