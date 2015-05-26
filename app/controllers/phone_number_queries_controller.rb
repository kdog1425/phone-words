class PhoneNumberQueriesController < ApplicationController
  
  def index
    respond_with PhoneNumberQuery.all
  end

  def create
    # save query to db
    pnq = PhoneNumberQuery.create(post_params)
    
    # compute possible combos
    queryNum = pnq.phonenumber
    Dir.chdir("./lib/java")
    filename = "results.json"
    cmd = "java -cp phone-words.jar PhoneSpellDriver " + queryNum + " ./out/" + filename
    system(cmd)
    Dir.chdir("../../")
    
    # respond with possible combos
    resultsJsonString = File.read('./lib/java/out/results.json');
    t = resultsJsonString[1...-2]
    t = "[{" + t + "}]"
    data = JSON.parse(t)
    results = {items: []}
    data.each do |d|
      wordCombos(d, "", results)
    end
    if results[:items].size > 100
      puts "size is " + results[:items].size.to_s
      results[:items] = results[:items][0...99]
    end
    render :json => results
  end

  def show
    respond_with PhoneNumberQuery.find(params[:id])
  end

  private
  def post_params
    params.require(:phone_number_query).permit(:phonenumber)
  end

  def wordCombos(data,prefix,results)
    newdata = data.dup
    k,v = data.first
    currprefix = ""
    if !v.nil?
      newdata.shift
      v.each do |vv|
        currprefix = prefix + "-" + vv
        wordCombos(newdata, currprefix, results)
      end
    else
      results[:items].push("\""+prefix+"\"")
    end
    nil
  end
end
