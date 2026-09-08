##################################
# Rock - Paper - Scissors
# Created by - badDoggy - | 09/26
##################################

# Imports
from random import randint
import os
os.system('cls')

# Random Computer selection
rand_num = randint(0,2)
if rand_num == 0:
	p2 = "rock"
elif rand_num == 1:
	p2 = "paper"
else:
	p2 = "scissors"


# Title Bar
print('Rock - Paper - Scissors\n')

# Player Input
# Computer choice display
p1 = input('Player Choice: ').lower()
print(f"Computer Choice: - {p2.capitalize()} -" )
print()


# If "valid" entry
if (p1 == 'rock' or p1 == 'paper' or p1 == 'scissors') and (p2 == 'rock' or p2 == 'paper' or p2 == 'scissors'):

   # if a tie
   if p1 == p2:
      print(f'It\'s a tie - Both players picked {p1.capitalize()}')

   # test for win and display results
   elif p1 == 'rock' and p2 == 'scissors':
         print(f'Player wins! - Rock smashes Scissors')
   elif p1 == 'paper' and p2 == 'rock':
         print(f'Player wins! - Paper covers Rock')
   elif p1 == 'scissors' and p2 == 'paper':
         print(f'Player wins! - Scissors cut Paper')

   elif p2 == 'rock' and p1 == 'scissors':
         print(f'Computer wins! - Rock smashes Scissors')
   elif p2 == 'paper' and p1 == 'rock':
         print(f'Computer wins! - Paper covers Rock')
   elif p2 == 'scissors' and p1 == 'paper':
         print(f'Computer wins! - Scissors cut Paper')

   # if empty input
   else:
      print('-- Invalid Input --')

else:
   # if empty input
   print('-- Invalid Input --')

print('\n\n-- End of Line --\n\n')