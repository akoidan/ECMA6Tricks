###
  Multiline comment
###

# single line
first = () ->
  name = "Phil"
  csOutput = "Hello #{name} , 2+2 =#{2+2}"+' single quotes: #{2+2}';
  a =3
  console.log('a is 3') if a is 3
  areYouHappy2 = off
  console.log('number is not a string:', 3 == '3')
  console.log(areYouHappy2)
  age = 5
  if age >= 4
    console.log("Age is greater than 4")
  # console.log('a is 3') if a == 3
  else if age >= 2
    console.log("Age is greater than 2")

  unless (age < 4 or age > 100 || age >  110)
    console.log('age is not less than 4')
  console.log(3 > 4 ? 'yes' : 'no')
  a = 5
  switch a
    when 5 then console.log('5')
    when 4 then console.log('4')
    else console.log('not 4 or 5')

  if a? # if a!= null
    console.log('a');
  b = null
  a =  b ? 'b is null'
  oneTo10 = [1..10]
  tenTo1 = [10..1]
  combine = oneTo10.concat tenTo1
  oneTo10.push tenTo1...
  console.log('-'*10)

loops = ->
  oneTo10 = [1..10]
  for x in oneTo10
    console.log(x)
  even = oneTo10.filter (x) -> x % 2 == 0
  console.log(Math.max even...)
  console.log(oneTo10.reduce (x,y) -> x+y)
  for x in [1..10] when x%2 isnt 0
    console.log('x')
  for x in [1..10] by 3
    console.log('x')
  employees = [ "a"
    "b"
    "c"
  ]
  for employee, i in employee
    if employee is "c"
      break
    console.log(employee, i)
  if "c" in employee
    console.log("C in employee")
  i = 10
  while i++ < 40
    console.log(i)
    if i is 20
      continue
  x = 0
  loop
    console.log(++x)
    break if x <3