name_of_the_student_array=[];



function submit()
{   
var display_name_of_the_student=[];
for(var j=1; j<=4; j++)
{
var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
console.log(name_of_the_student);
name_of_the_student_array.push(name_of_the_student);

}
console.log(name_of_the_student_array);

var length_name_of_the_students_array=name_of_the_student_array.length
console.log(length_name_of_the_students_array);

for(var k=0; k<length_name_of_the_students_array; k++)
{
display_name_of_the_student.push("<h4> Name- "+name_of_the_student_array[k]+"</h4>");
console.log(display_name_of_the_student);
} 
console.log(display_name_of_the_student);
document.getElementById("display_name_with_commas").innerHTML=display_name_of_the_student;

var remove_commas=display_name_of_the_student.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}


