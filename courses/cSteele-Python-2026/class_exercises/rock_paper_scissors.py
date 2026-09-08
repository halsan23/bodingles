import os
os.system('cls')


print('Rock - Paper - Scissors\n')

p1 = input('Player 1 - Choose: ').lower()
p2 = input('Player 2 - Choose: ').lower()
print()

# Debug Code
#print(f'p1 = {p1}')
#print(f'p2 = {p2}\n')
# ----------


if len(p1) == 0 or len(p2) == 0:
   error = '-- Empty Input --'
   err = 1

elif p1 != 'rock' or p2 != 'rock':
   if p1 != 'paper' or p2 != 'paper':
      if p1 != 'scissors' or p2 != 'scissors':
         error = '-- Input must be Rock, Paper or Scissors! --'
         err = 1

if err:
   print('-- Input Error --')
   print(error)

else:

   if p1 == p2:
      print(f'It\'s a tie - Both players picked {p1.capitalize()}')

   elif p1 == 'rock' and p2 == 'scissors':
         print('Player 1 wins! - Rock beats scissors')
   elif p1 == 'paper' and p2 == 'rock':
         print('Player 1 wins! - Paper beats Rock')
   elif p1 == 'scissors' and p2 == 'paper':
         print('Player 1 wins! - Scissors cut Paper')

   else:
      print(f'Player 2 wins! - {p2.capitalize()} beats {p1.capitalize()}')


print('\n-- End of Line --\n')