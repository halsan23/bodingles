# First Exercise
# Small app converts Miles to Kilometers
# ----------------------------------------------------
# badDoggy - 9/2/26
# ====================================================


# Basic heading
print("Input number of miles to convert?")


# Input how many miles to convert
miles = input()

# Input is a string - convert it to a float
miles = float(miles)

# convert miles to kilometers and round to 2 decimal places
klms = round(miles*1.609344, 2)

# Display output using "f-string"
print()
print(f"{miles} miles equals {klms} kilometers.")
print("End of Line")
print()