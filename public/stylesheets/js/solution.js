let getme = document.getElementById('getme');

getme.onclick = function(){
    let selectItem = document.getElementById('solutionselectObj').value;
    if(selectItem != "faculty"){
        document.getElementById('solutionselectObj2').style.visibility = "visible";
        if(selectItem == "science"){
           document.getElementById('solutioncheckName').innerHTML = "Check Department";
           let selectDept = document.getElementById('solutionselectObj2').value;

            document.getElementById('solutionone').innerHTML = "Computer Science";
                let valueOne = document.getElementById('solutionone').value = "computer";

                    if(selectDept == valueOne){
                        document.getElementById('solutionselectObj3').style.visibility = "visible";
                        document.getElementById('solutioncheckName').innerHTML = "Select Level";
                            let selectLevel = document.getElementById('solutionselectObj3').value;

                            if(selectLevel == "100"){
                                document.getElementById('solutionselectObj4').style.visibility = "visible";
                                 document.getElementById('solutioncheckName').innerHTML = "Check Course";
                                 let selectCourse = document.getElementById('solutionselectObj4').value;

                                    document.getElementById('solutioncourse1').innerHTML = "CSC101";
                                    let course1 = document.getElementById('solutioncourse1').value = "csc101";

                                    if(selectCourse == course1){
                                        window.location.replace('/solution');
                                    }

                                    document.getElementById('solutioncourse2').innerHTML = "CSC101";
                                    document.getElementById('solutioncourse3').innerHTML = "CSC102";
                                    document.getElementById('solutioncourse4').innerHTML = "CSC103";
                                    document.getElementById('solutioncourse5').innerHTML = "CSC104";
                                    document.getElementById('solutioncourse6').innerHTML = "CSC105";
                                    document.getElementById('solutioncourse7').innerHTML = "CSC106";
                                    document.getElementById('solutioncourse8').innerHTML = "CSC107";
                                    document.getElementById('solutioncourse9').innerHTML = "CSC108";
                                    document.getElementById('solutioncourse10').innerHTML = "CSC109";
                                    document.getElementById('solutioncourse11').innerHTML = "CSC111";
                                    document.getElementById('solutioncourse12').innerHTML = "CSC120";


                            }else{
                                document.getElementById('solutionselectObj4').style.visibility = "hidden";
                                 document.getElementById('solutioncheckName').innerHTML = "Select Level";
                            }
                    }else {
                        document.getElementById('solutionselectObj3').style.visibility = "hidden";
                        document.getElementById('solutionselectObj4').style.visibility = "hidden";
                        document.getElementById('solutioncheckName').innerHTML = "Check Department";
                    }


            document.getElementById('solutiontwo').innerHTML = "Mathematics";
            document.getElementById('solutionthree').innerHTML = "Biochemistry";
            document.getElementById('solutionfour').innerHTML = "Physics";
            document.getElementById('solutionfive').innerHTML = "Zoology";
            document.getElementById('solutionsix').innerHTML = "Botany";
            document.getElementById('solutionseven').innerHTML = "Fishery";
            document.getElementById('solutioneight').innerHTML = "Microbiology";
            document.getElementById('solutionnine').innerHTML = "Chemistry";



        }else if(selectItem == "art"){
            document.getElementById('solutioncheckName').innerHTML = "Check Department";

            document.getElementById('solutionone').innerHTML = "Music and Art";
            document.getElementById('solutiontwo').innerHTML = "English Language";
            document.getElementById('solutionthree').innerHTML = "Foreign Language";
            document.getElementById('solutionfour').innerHTML = "Philisopy";
            document.getElementById('solutionfive').innerHTML = "Religion";
            document.getElementById('solutionsix').innerHTML = "History";
            var child = document.getElementById("solutionseven"); child.parentNode.removeChild(child);
            var child2 = document.getElementById("solutioneight"); child2.parentNode.removeChild(child2);
            var child3 = document.getElementById("solutionnine"); child3.parentNode.removeChild(child3);
        }
    }else {
        document.getElementById('solutionselectObj4').style.visibility ="hidden";
        document.getElementById('solutionselectObj3').style.visibility ="hidden";
        document.getElementById('solutionselectObj2').style.visibility ="hidden";
        document.getElementById('solutioncheckName').innerHTML = "Check Faculty";
    }
}