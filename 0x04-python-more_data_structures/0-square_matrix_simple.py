#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    [[row[i] for row in matrix] for i in range(3)]
    return([list(map(lambda x: x**2,row)) for row in matrix])
