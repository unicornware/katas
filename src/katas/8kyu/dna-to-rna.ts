/**
 * @file Katas - DNAtoRNA
 * @module katas/8kyu/DNAtoRNA
 * @see https://codewars.com/kata/5556282156230d0e5e000089
 */

/**
 * Deoxyribonucleic acid (DNA) is the primary information storage molecule in
 * biological systems.
 *
 * DNA is composed of `4` nucleic acid bases: Guanine (`'G'`), Cytosine (`'C'`),
 * Adenine (`'A'`), and Thymine (`'T'`).
 *
 * Ribonucleic acid (RNA) is the primary messenger molecule in cells. RNA
 * differs slightly from DNA; its chemical structure and contains no Thymine.
 *
 * In RNA, Thymine is replaced by another nucleic acid - Uracil (`'U'`).
 *
 * Given a string representing a strand of DNA, `dna`, the function converts the
 * strand into RNA.
 *
 * @example
 *  DNAtoRNA('GCAT') // 'GCAU'
 *
 * @param {string} dna - DNA strand to convert
 * @return {string} RNA strand
 */
const DNAtoRNA = (dna: string): string => dna.replace(/T/g, 'U')

export default DNAtoRNA
