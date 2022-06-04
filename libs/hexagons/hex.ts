/* Represents a Hexagon. */
class Hex {
    q: number;
    r: number;
    s: number;

    /**
     * Creates a new Hex object.
     * 
     * @param q - The first co-ordinate.
     * @param r - The second co-ordinate.
     * @param s - The third co-ordinate.
     */
    constructor(q: number, r: number, s: number) {
        this.q = q;
        this.r = r;
        this.s = s;
    }
}