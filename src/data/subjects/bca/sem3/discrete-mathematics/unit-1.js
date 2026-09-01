/* =========================================================
   BCA • SEM 3 • Discrete Mathematics
   UNIT 1 — Vectors and Matrices
========================================================= */

import {
    createTopic,
    heading,
    text,
    list,
    table,
    note,
    definition,
    keyPoints,
    mcq,
    qa,
    code,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Vectors: Dot Product and Norm
========================================================= */

const vectorsBasics = createTopic(
    "vectors-dot-product-and-norm",
    "Vectors: Dot Product and Norm",

    [
        definition(
            "Vector",
            "A vector is an object that has both a magnitude (length) and a direction. In discrete mathematics, it is often represented as an ordered list of numbers (e.g., v = [v1, v2, ..., vn])."
        ),

        heading("1. Dot Product (Inner Product)"),

        text(
            "The dot product of two vectors A = [a1, a2, ..., an] and B = [b1, b2, ..., bn] of the same size is the sum of the products of their corresponding components."
        ),

        code(
            "Formula:\nA · B = (a1 * b1) + (a2 * b2) + ... + (an * bn)",
            "text",
            "Dot Product Formula"
        ),

        text(
            "Example: If A = [1, 2, 3] and B = [4, -5, 6],\nA · B = (1*4) + (2*-5) + (3*6) = 4 - 10 + 18 = 12."
        ),

        heading("2. Norm (Magnitude/Length of a Vector)"),

        text(
            "The norm (specifically the Euclidean norm) represents the length or magnitude of a vector. It is denoted by ||v||."
        ),

        code(
            "Formula:\n||v|| = sqrt(v1² + v2² + ... + vn²)",
            "text",
            "Norm Formula"
        ),

        text(
            "Example: If v = [3, 4], its norm is:\n||v|| = sqrt(3² + 4²) = sqrt(9 + 16) = sqrt(25) = 5."
        ),

        note(
            "Two vectors are orthogonal (perpendicular) if their dot product is zero (A · B = 0).",
            "tip",
            "Important Property"
        ),

        keyPoints([
            "A vector is an ordered list of components.",
            "Dot product results in a single scalar number, not a vector.",
            "The norm is the square root of the dot product of a vector with itself: ||v|| = sqrt(v · v).",
        ]),
    ],

    {
        summary: "Understand vectors, how to calculate the dot product of two vectors, and how to find the norm (magnitude) of a vector.",
        minutes: 10,
        tags: ["vectors", "dot-product", "norm", "math", "discrete"],

        mcqs: [
            mcq(
                "What is the result of a dot product between two vectors?",
                ["A new vector", "A matrix", "A scalar (single number)", "An array"],
                2,
                "The dot product sums up the component products into a single scalar value."
            ),
            mcq(
                "If vector v = [0, 3, 4], what is its norm ||v||?",
                ["5", "7", "25", "12"],
                0,
                "sqrt(0² + 3² + 4²) = sqrt(9 + 16) = sqrt(25) = 5."
            ),
        ],

        questions: [
            qa(
                "Define Dot Product and Norm of a vector. Give one example of each.",
                "The Dot Product of two vectors is the sum of the products of their corresponding entries. For A=[1, 2] and B=[3, 4], A·B = (1*3)+(2*4) = 11. The Norm (magnitude) of a vector is the square root of the sum of the squared components. For V=[3, 4], the norm ||V|| = sqrt(3² + 4²) = 5. The dot product yields a scalar, and the norm measures the length of the vector.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Matrix Operations
========================================================= */

const matrixOperations = createTopic(
    "matrix-operations",
    "Matrix Operations: Addition, Scalar Multiplication, and Transpose",

    [
        definition(
            "Matrix",
            "A matrix is a rectangular array of numbers arranged in rows and columns. Its dimension is denoted by m × n (m rows and n columns)."
        ),

        heading("1. Matrix Addition"),

        text(
            "To add two matrices, they MUST have the exact same dimensions (m × n). Addition is done element-by-element."
        ),

        code(
            `A = [1  2]     B = [5  6]
    [3  4]         [7  8]

A + B = [ (1+5)  (2+6) ]  =  [ 6   8 ]
        [ (3+7)  (4+8) ]     [10  12 ]`,
            "text",
            "Matrix Addition Example"
        ),

        heading("2. Scalar Multiplication"),

        text(
            "Scalar multiplication means multiplying a matrix by a single number (a scalar). Every element inside the matrix is multiplied by that number."
        ),

        code(
            `Let k = 3 and A = [1  2]
                  [3  4]

k * A = [ (3*1)  (3*2) ]  =  [ 3   6 ]
        [ (3*3)  (3*4) ]     [ 9  12 ]`,
            "text",
            "Scalar Multiplication Example"
        ),

        heading("3. Transpose of a Matrix"),

        text(
            "The transpose of a matrix is found by swapping its rows with its columns. The transpose of matrix A is denoted as A^T or A'."
        ),

        code(
            `A = [1  2  3]   (2x3 matrix)
    [4  5  6]

A^T = [1  4]    (3x2 matrix)
      [2  5]
      [3  6]`,
            "text",
            "Matrix Transpose Example"
        ),

        keyPoints([
            "Matrix addition requires matrices of the same dimensions.",
            "Scalar multiplication affects every element in the matrix.",
            "Transposing swaps rows into columns (an m×n matrix becomes n×m).",
        ]),
    ],

    {
        summary: "Learn the basics of matrix manipulation: addition, scalar multiplication, and transposing matrices.",
        minutes: 10,
        tags: ["matrix", "addition", "scalar", "transpose", "math"],

        mcqs: [
            mcq(
                "For two matrices to be added together, what condition must be met?",
                ["They must be square matrices", "They must have the same dimensions", "They must contain positive numbers", "One must be a transpose of the other"],
                1,
                "Matrix addition is only possible if both matrices are exactly the same size."
            ),
            mcq(
                "If an m × n matrix is transposed, what will be the dimensions of the resulting matrix?",
                ["m × n", "n × m", "m × m", "n × n"],
                1,
                "Transposing swaps rows and columns, turning m × n into n × m."
            ),
        ],

        questions: [
            qa(
                "Explain Matrix Addition and Scalar Multiplication with simple examples.",
                "Matrix Addition requires two matrices to have the exact same dimensions. It involves adding corresponding elements. For example, [1, 2] + [3, 4] = [(1+3), (2+4)] = [4, 6]. Scalar Multiplication involves multiplying a single number (scalar) by every element of a matrix. For example, if scalar k=2 and Matrix A=[1, 2], then k*A = [2*1, 2*2] = [2, 4].",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Matrix Multiplication
========================================================= */

const matrixMultiplication = createTopic(
    "matrix-multiplication",
    "Matrix Multiplication",

    [
        text(
            "Matrix multiplication is completely different from scalar multiplication or addition. It involves multiplying rows of the first matrix by columns of the second."
        ),

        heading("Condition for Multiplication"),

        definition(
            "Multiplication Rule",
            "Two matrices A and B can be multiplied (A × B) ONLY IF the number of COLUMNS in A equals the number of ROWS in B."
        ),

        list([
            "If A is an (m × n) matrix, and B is an (n × p) matrix...",
            "...then multiplication is possible because the inner dimensions (n) match.",
            "The resulting matrix C will have the dimensions of the outer numbers: (m × p)."
        ]),

        heading("How to Multiply"),

        text(
            "To find the element at row i and column j of the new matrix, take the dot product of the i-th row of the first matrix and the j-th column of the second matrix."
        ),

        code(
            `A = [1  2]     B = [5  6]
    [3  4]         [7  8]

A x B = [ (1*5 + 2*7)   (1*6 + 2*8) ]
        [ (3*5 + 4*7)   (3*6 + 4*8) ]

      = [ (5 + 14)     (6 + 16) ]
        [ (15 + 28)    (18 + 32) ]

      = [ 19   22 ]
        [ 43   50 ]`,
            "text",
            "2x2 Matrix Multiplication Example"
        ),

        note(
            "Matrix multiplication is NOT commutative. In general, A × B ≠ B × A.",
            "warning",
            "Crucial Rule"
        ),

        keyPoints([
            "Inner dimensions must match to multiply matrices (m×n and n×p).",
            "Output dimension is m×p.",
            "Multiplication uses the 'row-by-column' dot product method.",
            "A × B is generally not equal to B × A.",
        ]),
    ],

    {
        summary: "Understand the strict rules and step-by-step process of multiplying two matrices.",
        minutes: 12,
        tags: ["matrix", "multiplication", "rules", "math"],

        mcqs: [
            mcq(
                "If Matrix A is 3x4 and Matrix B is 4x2, what will be the dimensions of A × B?",
                ["3x4", "4x2", "3x2", "Multiplication is not possible"],
                2,
                "The inner 4s match. The result takes the outer numbers: 3x2."
            ),
            mcq(
                "Is Matrix Multiplication commutative (i.e., is A×B always equal to B×A)?",
                ["Yes, always", "No, almost never", "Only for 3x3 matrices", "Yes, if they contain zeros"],
                1,
                "Matrix multiplication is non-commutative (A×B ≠ B×A)."
            ),
        ],

        questions: [
            qa(
                "What is the required condition to multiply two matrices? If A is a 2x3 matrix and B is a 3x5 matrix, what is the dimension of A x B?",
                "To multiply two matrices A and B, the number of columns in matrix A must exactly equal the number of rows in matrix B. If A is 2x3 (2 rows, 3 columns) and B is 3x5 (3 rows, 5 columns), the inner dimensions (3) match, so multiplication is possible. The resulting matrix will have the number of rows from A and columns from B, resulting in a 2x5 matrix.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Square Matrices and Determinants
========================================================= */

const squareMatricesAndDeterminants = createTopic(
    "square-matrices-and-determinants",
    "Square Matrices and Determinants",

    [
        heading("Square Matrices"),

        definition(
            "Square Matrix",
            "A square matrix is a matrix with the same number of rows and columns (n × n)."
        ),

        heading("Types of Square Matrices"),

        table(
            ["Type", "Description", "Example (3x3)"],
            [
                ["Diagonal Matrix", "Only main diagonal elements are non-zero; all others are zero.", "Diag(2, 5, 8)"],
                ["Upper Triangular", "All entries BELOW the main diagonal are zero.", "[1 2 3; 0 4 5; 0 0 6]"],
                ["Lower Triangular", "All entries ABOVE the main diagonal are zero.", "[1 0 0; 2 3 0; 4 5 6]"],
                ["Symmetric Matrix", "A matrix that is equal to its transpose (A = A^T).", "a_ij = a_ji"],
                ["Skew-Symmetric", "A matrix equal to the negative of its transpose (A = -A^T). Main diagonal must be zeros.", "a_ij = -a_ji"],
                ["Orthogonal Matrix", "A matrix whose transpose is equal to its inverse (A^T = A^-1). Thus, A * A^T = I.", "Rotation matrices"],
            ]
        ),

        heading("Determinant of a Matrix"),

        text(
            "The determinant is a special scalar number calculated from a square matrix. It is denoted as det(A) or |A|. It helps find the inverse of a matrix and solve linear equations."
        ),

        list([
            "**1x1 Matrix:** For A = [a], det(A) = a.",
            "**2x2 Matrix:** For A = [a b; c d], det(A) = (a*d) - (b*c).",
        ]),

        code(
            `Let A = [4  6]
        [3  8]

det(A) = (4 * 8) - (6 * 3)
       = 32 - 18
       = 14`,
            "text",
            "2x2 Determinant Example"
        ),

        heading("3x3 Determinant Expansion"),

        text(
            "To find the determinant of a 3x3 matrix, expand along the first row:"
        ),

        code(
            `A = [a  b  c]
    [d  e  f]
    [g  h  i]

|A| = a(ei - fh) - b(di - fg) + c(dh - eg)`,
            "text",
            "3x3 Determinant Formula"
        ),

        note(
            "If the determinant of a matrix is 0, the matrix is called a 'Singular Matrix' and it does NOT have an inverse.",
            "warning",
            "Singular Matrix"
        ),

        keyPoints([
            "Symmetric: A = A^T. Skew-Symmetric: A = -A^T.",
            "Orthogonal: A * A^T = I.",
            "Determinants can only be calculated for square matrices.",
            "A matrix with determinant 0 has no inverse.",
        ]),
    ],

    {
        summary: "Explore various types of square matrices (diagonal, symmetric, orthogonal) and learn how to calculate determinants up to 3x3 order.",
        minutes: 15,
        tags: ["matrix", "determinant", "symmetric", "orthogonal", "math"],

        mcqs: [
            mcq(
                "A matrix is called symmetric if:",
                ["It has all 1s", "A = A^T", "A = -A^T", "Its determinant is 0"],
                1,
                "A symmetric matrix is equal to its transpose."
            ),
            mcq(
                "If a matrix has a determinant of 0, it is called a:",
                ["Zero Matrix", "Identity Matrix", "Singular Matrix", "Orthogonal Matrix"],
                2,
                "A matrix with |A|=0 is singular and cannot be inverted."
            ),
            mcq(
                "What is the condition for a matrix to be Orthogonal?",
                ["A = A^T", "A = -A^T", "A * A^T = I (Identity matrix)", "All elements are 1"],
                2,
                "An orthogonal matrix multiplied by its transpose gives the Identity matrix."
            ),
        ],

        questions: [
            qa(
                "Define Symmetric, Skew-Symmetric, and Orthogonal matrices.",
                "1) Symmetric Matrix: A square matrix that is equal to its transpose (A = A^T). For example, the element at row i, col j is identical to row j, col i. 2) Skew-Symmetric Matrix: A square matrix that is equal to the negative of its transpose (A = -A^T). Its main diagonal elements must always be zero. 3) Orthogonal Matrix: A real square matrix whose transpose is equal to its inverse. Therefore, multiplying the matrix by its transpose results in the Identity matrix (A * A^T = I).",
                5
            ),
            qa(
                "Explain how to calculate the determinant of a 2x2 matrix with an example.",
                "The determinant of a 2x2 matrix A = [a, b; c, d] is calculated by subtracting the product of the non-main diagonal elements from the product of the main diagonal elements. Formula: |A| = (a*d) - (b*c). For example, if A = [5, 2; 3, 4], the determinant is (5*4) - (2*3) = 20 - 6 = 14.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    vectorsBasics,
    matrixOperations,
    matrixMultiplication,
    squareMatricesAndDeterminants,
];