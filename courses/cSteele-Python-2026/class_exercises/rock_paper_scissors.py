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

   elif p1 == 'rock':
      if p2 == 'scissors':
         print('Player 1 wins! - Rock smashes scissors')
      else:
         print('Player 2 wins! - Paper covers Rock')


   elif p1 == 'paper':
      if p2 == 'rock':
         print('Player 1 wins! - Paper covers Rock')
      else:
         print('Player 2 wins! - Scissors cut Paper')


   elif p1 == 'scissors':
      if p2 == 'paper':
         print('Player 1 wins! - Scissors cut Paper')
      else:
         print('Player 2 wins! - Rock smashes Scissors')


print('\n-- End of Line --\n')