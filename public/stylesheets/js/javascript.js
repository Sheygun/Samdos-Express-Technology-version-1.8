let clickme = document.getElementById('clickme');

clickme.onclick = function(){
    let selectItem = document.getElementById('selectObj').value;
    if(selectItem != "faculty"){
        document.getElementById('selectObj2').style.visibility = "visible";
        if(selectItem == "science"){
           document.getElementById('checkName').innerHTML = "Check Department";
           let selectDept = document.getElementById('selectObj2').value;

        //    ============================== computer science ===================================

            document.getElementById('one').innerHTML = "Computer Science";
                let valueOne = document.getElementById('one').value = "computer";
             document.getElementById('two').innerHTML = "Mathematics";
                let valueTwo = document.getElementById('two').value = "maths";
            document.getElementById('three').innerHTML = "Biochemistry";
                let valueThree = document.getElementById('three').value = "bch";
            document.getElementById('four').innerHTML = "Physics";
                let valueFour = document.getElementById('four').value = "phy";
            document.getElementById('five').innerHTML = "Zoology";
                let valueFive = document.getElementById('five').value = "zoo";
            document.getElementById('six').innerHTML = "Botany";
                let valueSix = document.getElementById('six').value = "bot";
            document.getElementById('seven').innerHTML = "Fishery";
                let valueSeven = document.getElementById('seven').value = "fish";
            document.getElementById('eight').innerHTML = "Microbiology";
                let valueEight = document.getElementById('eight').value = "mcb";
            document.getElementById('nine').innerHTML = "Chemistry";
                let valueNine = document.getElementById('nine').value = "chm";



                    if(selectDept == valueOne){
                        document.getElementById('selectObj3').style.visibility = "visible";
                        document.getElementById('checkName').innerHTML = "Select Level";
                            let selectLevel = document.getElementById('selectObj3').value;

                            if(selectLevel == "100"){
                                 window.location.replace('/pq');

                            }else if(selectLevel == "200"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "300"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "400"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "500"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "others"){
                                window.location.replace('/pq');
                            }
                            else{
                                 document.getElementById('checkName').innerHTML = "Select Level";
                            }
                    }
// ================================================ maths ========================================
                    else if(selectDept == valueTwo){
                        document.getElementById('selectObj3').style.visibility = "visible";
                        document.getElementById('checkName').innerHTML = "Select Level";
                            let selectLevel = document.getElementById('selectObj3').value;

                            if(selectLevel == "100"){
                                 window.location.replace('/pq');

                            }else if(selectLevel == "200"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "300"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "400"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "500"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "others"){
                                window.location.replace('/pq');
                            }
                            else{
                                 document.getElementById('checkName').innerHTML = "Select Level";
                            }
                    }
                    // ================================================= Biochemistry =====================================

                    else if(selectDept == valueThree){
                        document.getElementById('selectObj3').style.visibility = "visible";
                        document.getElementById('checkName').innerHTML = "Select Level";
                            let selectLevel = document.getElementById('selectObj3').value;

                            if(selectLevel == "100"){
                                 window.location.replace('/pq');

                            }else if(selectLevel == "200"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "300"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "400"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "500"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "others"){
                                window.location.replace('/pq');
                            }
                            else{
                                 document.getElementById('checkName').innerHTML = "Select Level";
                            }
                    }

    // ================================================= Physics =====================================
                     else if(selectDept == valueFour){
                        document.getElementById('selectObj3').style.visibility = "visible";
                        document.getElementById('checkName').innerHTML = "Select Level";
                            let selectLevel = document.getElementById('selectObj3').value;

                            if(selectLevel == "100"){
                                 window.location.replace('/pq');

                            }else if(selectLevel == "200"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "300"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "400"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "500"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "others"){
                                window.location.replace('/pq');
                            }
                            else{
                                 document.getElementById('checkName').innerHTML = "Select Level";
                            }
                    }

                     // ================================================= zoology =====================================
                     else if(selectDept == valueFive){
                        document.getElementById('selectObj3').style.visibility = "visible";
                        document.getElementById('checkName').innerHTML = "Select Level";
                            let selectLevel = document.getElementById('selectObj3').value;

                            if(selectLevel == "100"){
                                 window.location.replace('/pq');

                            }else if(selectLevel == "200"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "300"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "400"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "500"){
                                window.location.replace('/pq');
                            }
                            else if(selectLevel == "others"){
                                window.location.replace('/pq');
                            }
                            else{
                                 document.getElementById('checkName').innerHTML = "Select Level";
                            }
                    }

                 // ================================================= Botany =====================================
                 else if(selectDept == valueSix){
                    document.getElementById('selectObj3').style.visibility = "visible";
                    document.getElementById('checkName').innerHTML = "Select Level";
                        let selectLevel = document.getElementById('selectObj3').value;

                        if(selectLevel == "100"){
                             window.location.replace('/pq');

                        }else if(selectLevel == "200"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "300"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "400"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "500"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "others"){
                            window.location.replace('/pq');
                        }
                        else{
                             document.getElementById('checkName').innerHTML = "Select Level";
                        }
                }

                 // ================================================= Fishery =====================================
                 else if(selectDept == valueSeven){
                    document.getElementById('selectObj3').style.visibility = "visible";
                    document.getElementById('checkName').innerHTML = "Select Level";
                        let selectLevel = document.getElementById('selectObj3').value;

                        if(selectLevel == "100"){
                             window.location.replace('/pq');

                        }else if(selectLevel == "200"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "300"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "400"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "500"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "others"){
                            window.location.replace('/pq');
                        }
                        else{
                             document.getElementById('checkName').innerHTML = "Select Level";
                        }
                }
             // ================================================= MicroBiology =====================================
             else if(selectDept == valueEight){
                document.getElementById('selectObj3').style.visibility = "visible";
                document.getElementById('checkName').innerHTML = "Select Level";
                    let selectLevel = document.getElementById('selectObj3').value;

                    if(selectLevel == "100"){
                         window.location.replace('/pq');

                    }else if(selectLevel == "200"){
                        window.location.replace('/pq');
                    }
                    else if(selectLevel == "300"){
                        window.location.replace('/pq');
                    }
                    else if(selectLevel == "400"){
                        window.location.replace('/pq');
                    }
                    else if(selectLevel == "500"){
                        window.location.replace('/pq');
                    }
                    else if(selectLevel == "others"){
                        window.location.replace('/pq');
                    }
                    else{
                         document.getElementById('checkName').innerHTML = "Select Level";
                    }
            }

                 // ================================================= Chemistry =====================================
                 else if(selectDept == valueNine){
                    document.getElementById('selectObj3').style.visibility = "visible";
                    document.getElementById('checkName').innerHTML = "Select Level";
                        let selectLevel = document.getElementById('selectObj3').value;

                        if(selectLevel == "100"){
                             window.location.replace('/pq');

                        }else if(selectLevel == "200"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "300"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "400"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "500"){
                            window.location.replace('/pq');
                        }
                        else if(selectLevel == "others"){
                            window.location.replace('/pq');
                        }
                        else{
                             document.getElementById('checkName').innerHTML = "Select Level";
                        }
                }

// ================================================= End =====================================
                    else {
                        document.getElementById('selectObj3').style.visibility = "hidden";
                        document.getElementById('checkName').innerHTML = "Check Department";
                    }















            // ================================================= Biochemistry =====================================





        }else if(selectItem == "art"){
            document.getElementById('checkName').innerHTML = "Check Department";

            document.getElementById('one').innerHTML = "Music and Art";
            document.getElementById('two').innerHTML = "English Language";
            document.getElementById('three').innerHTML = "Foreign Language";
            document.getElementById('four').innerHTML = "Philisopy";
            document.getElementById('five').innerHTML = "Religion";
            document.getElementById('six').innerHTML = "History";
            var child = document.getElementById("seven"); child.parentNode.removeChild(child);
            var child2 = document.getElementById("eight"); child2.parentNode.removeChild(child2);
            var child3 = document.getElementById("nine"); child3.parentNode.removeChild(child3);
        }
    }else {
        document.getElementById('selectObj3').style.visibility ="hidden";
        document.getElementById('selectObj2').style.visibility ="hidden";
        document.getElementById('checkName').innerHTML = "Check Faculty";
    }
}