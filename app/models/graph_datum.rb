class GraphDatum

  attr_accessor :plays_per_day, :total_days, :max_plays

  def initialize(show)
    @plays_per_day = calc_plays_per_day(show)
  end

  def calc_plays_per_day(show)
    ppd = Hash.new(0)

    time_now = Time.new

    show.queue_items.each do |q|
      day = ((time_now - q.created_at) / 86400).floor
      ppd[day] += 1
    end

    @total_days = ppd.keys.max
    @max_plays = ppd.values.max
    ppd
  end
end
