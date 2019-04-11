let faculty = document.getElementById('solutionselectObj');
let department = document.getElementById('solutionselectObj2');
let level = document.getElementById('solutionselectObj3');
let course = document.getElementById('solutionselectObj4');
let check = document.getElementById('getme');


faculty.onchange = function(){
    if(faculty.value == "science"){
        department.disabled = false;
        department.options[1].innerHTML = 'Computer Science';
        department.options[2].innerHTML = 'Mathematics';
        department.options[3].innerHTML = 'Physics';
        department.options[4].innerHTML = 'Zoology';
        department.options[5].innerHTML = 'Biochemistry';
        department.options[6].innerHTML = 'Microbiology';
        department.options[7].innerHTML = 'Chemistry';
        department.options[8].innerHTML = 'Fishery';
        department.options[9].innerHTML = 'Botany';

        department.options[1].value = 'csc';
        department.options[2].value = 'mat';
        department.options[3].value = 'phy';
        department.options[4].value = 'zoo';
        department.options[5].value = 'bch';
        department.options[6].value = 'mcb';
        department.options[7].value = 'chm';
        department.options[8].value = 'fish';
        department.options[9].value = 'bot';

    } else  if(faculty.value == "art"){
        department.disabled = false;
        department.options[1].innerHTML = 'Music and Art';
        department.options[2].innerHTML = 'English Language';
        department.options[3].innerHTML = 'Foreign Language';
        department.options[4].innerHTML = 'Philisopy';
        department.options[5].innerHTML = 'Religion';
        department.options[6].innerHTML = 'History';
                     var child = document.getElementById("solutionseven"); child.parentNode.removeChild(child);
                    var child2 = document.getElementById("solutioneight"); child2.parentNode.removeChild(child2);
                    var child3 = document.getElementById("solutionnine"); child3.parentNode.removeChild(child3);

    }
    else{
        department.disabled = true;
        check.disabled = true;
    }
}
        department.onchange = function(){
            if(department.value != "dept2"){
                    level.disabled = false;
            }else{
                level.disabled = true;
            }
        }
        level.onchange = function(){
                if(level.value != "level2"){
                    course.disabled = false;


                    if(level.value == "100"){
                            course.options[1].innerHTML = "CSC101";
                            course.options[2].innerHTML = "CSC101";
                            course.options[3].innerHTML = "CSC101";
                            course.options[4].innerHTML = "CSC101";
                            course.options[5].innerHTML = "CSC101";
                            course.options[6].innerHTML = "CSC101";
                            course.options[7].innerHTML = "CSC101";
                            course.options[8].innerHTML = "CSC101";
                            course.options[9].innerHTML = "CSC101";
                            course.options[10].innerHTML = "CSC101";
                            course.options[11].innerHTML = "CSC101";
                            course.options[12].innerHTML = "CSC101";


                            course.options[1].value = "csc101";
                            course.options[2].value = "csc101";
                            course.options[3].value = "csc101";
                            course.options[4].value = "csc101";
                            course.options[5].value = "csc101";
                            course.options[6].value = "csc101";
                            course.options[7].value = "csc101";
                            course.options[8].value = "csc101";
                            course.options[9].value = "csc101";
                            course.options[10].value = "csc101";
                            course.options[11].value = "csc101";
                            course.options[12].value = "csc101";
                    }

                    else  if(level.value == "200"){
                        course.options[1].innerHTML = "CSC201";
                        course.options[2].innerHTML = "CSC201";
                        course.options[3].innerHTML = "CSC201";
                        course.options[4].innerHTML = "CSC201";
                        course.options[5].innerHTML = "CSC201";
                        course.options[6].innerHTML = "CSC201";
                        course.options[7].innerHTML = "CSC201";
                        course.options[8].innerHTML = "CSC201";
                        course.options[9].innerHTML = "CSC201";
                        course.options[10].innerHTML = "CSC201";
                        course.options[11].innerHTML = "CSC201";
                        course.options[12].innerHTML = "CSC201";

                        course.options[1].value = "csc201";
                            course.options[2].value = "csc201";
                            course.options[3].value = "csc201";
                            course.options[4].value = "csc201";
                            course.options[5].value = "csc201";
                            course.options[6].value = "csc201";
                            course.options[7].value = "csc201";
                            course.options[8].value = "csc201";
                            course.options[9].value = "csc201";
                            course.options[10].value = "csc201";
                            course.options[11].value = "csc201";
                            course.options[12].value = "csc201";
                     }

                     else  if(level.value == "300"){
                        course.options[1].innerHTML = "CSC301";
                        course.options[2].innerHTML = "CSC301";
                        course.options[3].innerHTML = "CSC301";
                        course.options[4].innerHTML = "CSC301";
                        course.options[5].innerHTML = "CSC301";
                        course.options[6].innerHTML = "CSC301";
                        course.options[7].innerHTML = "CSC301";
                        course.options[8].innerHTML = "CSC301";
                        course.options[9].innerHTML = "CSC301";
                        course.options[10].innerHTML = "CSC301";
                        course.options[11].innerHTML = "CSC301";
                        course.options[12].innerHTML = "CSC301";

                        course.options[1].value = "csc301";
                            course.options[2].value = "csc301";
                            course.options[3].value = "csc301";
                            course.options[4].value = "csc301";
                            course.options[5].value = "csc301";
                            course.options[6].value = "csc301";
                            course.options[7].value = "csc301";
                            course.options[8].value = "csc301";
                            course.options[9].value = "csc301";
                            course.options[10].value = "csc301";
                            course.options[11].value = "csc301";
                            course.options[12].value = "csc301";
                     }
                     else  if(level.value == "400"){
                        course.options[1].innerHTML = "CSC401";
                        course.options[2].innerHTML = "CSC401";
                        course.options[3].innerHTML = "CSC401";
                        course.options[4].innerHTML = "CSC401";
                        course.options[5].innerHTML = "CSC401";
                        course.options[6].innerHTML = "CSC401";
                        course.options[7].innerHTML = "CSC401";
                        course.options[8].innerHTML = "CSC401";
                        course.options[10].innerHTML = "CSC401";
                        course.options[11].innerHTML = "CSC401";
                        course.options[12].innerHTML = "CSC401";


                        course.options[1].value = "csc401";
                            course.options[2].value = "csc401";
                            course.options[3].value = "csc401";
                            course.options[4].value = "csc401";
                            course.options[5].value = "csc401";
                            course.options[6].value = "csc401";
                            course.options[7].value = "csc401";
                            course.options[8].value = "csc401";
                            course.options[9].value = "csc401";
                            course.options[10].value = "csc401";
                            course.options[11].value = "csc401";
                            course.options[12].value = "csc401";
                     }
                     else  if(level.value == "500"){
                        course.options[1].innerHTML = "CSC501";
                        course.options[2].innerHTML = "CSC501";
                        course.options[3].innerHTML = "CSC501";
                        course.options[4].innerHTML = "CSC501";
                        course.options[5].innerHTML = "CSC501";
                        course.options[6].innerHTML = "CSC501";
                        course.options[7].innerHTML = "CSC501";
                        course.options[8].innerHTML = "CSC501";
                        course.options[9].innerHTML = "CSC501";
                        course.options[10].innerHTML = "CSC501";
                        course.options[11].innerHTML = "CSC501";
                        course.options[12].innerHTML = "CSC501";

                        course.options[1].value = "csc501";
                            course.options[2].value = "csc501";
                            course.options[3].value = "csc501";
                            course.options[4].value = "csc501";
                            course.options[5].value = "csc501";
                            course.options[6].value = "csc501";
                            course.options[7].value = "csc501";
                            course.options[8].value = "csc501";
                            course.options[9].value = "csc501";
                            course.options[10].value = "csc501";
                            course.options[11].value = "csc501";
                            course.options[12].value = "csc501";
                     }



                }
                else{
                    course.disabled = true;
                    check.disabled = true;
                }
        }
        course.onchange = function(){
            if(course.value != "solutioncourse2"){

                if(faculty.value == "science" && department.value == "csc" && level.value == "100"){
                    check.disabled = false;

                }else{
                    alert("dont");
                }
            }
            else{
                check.disabled = true;
            }

    }



// let getme = document.getElementById('getme');

// getme.onclick = function(){
//     let selectItem = document.getElementById('solutionselectObj').value;
//     if(selectItem != "faculty"){
//         document.getElementById('solutionselectObj2').style.visibility = "visible";
//         if(selectItem == "science"){
//            document.getElementById('solutioncheckName').innerHTML = "Check Department";
//            let selectDept = document.getElementById('solutionselectObj2').value;

//             document.getElementById('solutionone').innerHTML = "Computer Science";
//                 let valueOne = document.getElementById('solutionone').value = "computer";

//                     if(selectDept == valueOne){
//                         document.getElementById('solutionselectObj3').style.visibility = "visible";
//                         document.getElementById('solutioncheckName').innerHTML = "Select Level";
//                             let selectLevel = document.getElementById('solutionselectObj3').value;

//                             if(selectLevel == "100"){
//                                 document.getElementById('solutionselectObj4').style.visibility = "visible";
//                                  document.getElementById('solutioncheckName').innerHTML = "Check Course";
//                                  let selectCourse = document.getElementById('solutionselectObj4').value;

//                                     document.getElementById('solutioncourse1').innerHTML = "CSC101";
//                                     let course1 = document.getElementById('solutioncourse1').value = "csc101";

//                                     if(selectCourse == course1){
//                                         window.location.replace('/solution');
//                                     }

//                                     document.getElementById('solutioncourse2').innerHTML = "CSC101";
//                                     document.getElementById('solutioncourse3').innerHTML = "CSC102";
//                                     document.getElementById('solutioncourse4').innerHTML = "CSC103";
//                                     document.getElementById('solutioncourse5').innerHTML = "CSC104";
//                                     document.getElementById('solutioncourse6').innerHTML = "CSC105";
//                                     document.getElementById('solutioncourse7').innerHTML = "CSC106";
//                                     document.getElementById('solutioncourse8').innerHTML = "CSC107";
//                                     document.getElementById('solutioncourse9').innerHTML = "CSC108";
//                                     document.getElementById('solutioncourse10').innerHTML = "CSC109";
//                                     document.getElementById('solutioncourse11').innerHTML = "CSC111";
//                                     document.getElementById('solutioncourse12').innerHTML = "CSC120";


//                             }else{
//                                 document.getElementById('solutionselectObj4').style.visibility = "hidden";
//                                  document.getElementById('solutioncheckName').innerHTML = "Select Level";
//                             }
//                     }else {
//                         document.getElementById('solutionselectObj3').style.visibility = "hidden";
//                         document.getElementById('solutionselectObj4').style.visibility = "hidden";
//                         document.getElementById('solutioncheckName').innerHTML = "Check Department";
//                     }


//             document.getElementById('solutiontwo').innerHTML = "Mathematics";
//             document.getElementById('solutionthree').innerHTML = "Biochemistry";
//             document.getElementById('solutionfour').innerHTML = "Physics";
//             document.getElementById('solutionfive').innerHTML = "Zoology";
//             document.getElementById('solutionsix').innerHTML = "Botany";
//             document.getElementById('solutionseven').innerHTML = "Fishery";
//             document.getElementById('solutioneight').innerHTML = "Microbiology";
//             document.getElementById('solutionnine').innerHTML = "Chemistry";



//         }else if(selectItem == "art"){
//             document.getElementById('solutioncheckName').innerHTML = "Check Department";

//             document.getElementById('solutionone').innerHTML = "Music and Art";
//             document.getElementById('solutiontwo').innerHTML = "English Language";
//             document.getElementById('solutionthree').innerHTML = "Foreign Language";
//             document.getElementById('solutionfour').innerHTML = "Philisopy";
//             document.getElementById('solutionfive').innerHTML = "Religion";
//             document.getElementById('solutionsix').innerHTML = "History";
//             var child = document.getElementById("solutionseven"); child.parentNode.removeChild(child);
//             var child2 = document.getElementById("solutioneight"); child2.parentNode.removeChild(child2);
//             var child3 = document.getElementById("solutionnine"); child3.parentNode.removeChild(child3);
//         }
//     }else {
//         document.getElementById('solutionselectObj4').style.visibility ="hidden";
//         document.getElementById('solutionselectObj3').style.visibility ="hidden";
//         document.getElementById('solutionselectObj2').style.visibility ="hidden";
//         document.getElementById('solutioncheckName').innerHTML = "Check Faculty";
//     }
// }




