#!/usr/bin/python3

def safe_function(fct, *args)
while True:
    try:
        a = int(input("abc: "))
        break
    except ValueError:
        print("\nThis is not a number. Try again...")
        print()
