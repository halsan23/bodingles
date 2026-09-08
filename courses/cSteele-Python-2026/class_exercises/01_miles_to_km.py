# First Exercise
# Small app converts Miles to Kilometers
# ----------------------------------------------------
# badDoggy - 9/2/26
# ====================================================

# Display title heading
print("\nMiles to Kilometers Converter\n")


# Input how many miles to convert
# float converts the str input into a usable math variable
miles = float(input("Input number of miles to convert? "))


# convert the miles to kilometers, round to 2 decimal places
kms = round(miles*1.609344, 2)


# Display the output using "f-string"
print("\n" + f"{miles} miles equals {kms} kilometers.")
print("End of Line\n")