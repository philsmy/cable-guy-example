class LibraryBookStatusChannel < ApplicationCable::Channel
  def subscribed
    Rails.logger.info "Subscribed to #{params[:library_book_id]}"

    stream_from "LibraryBookStatusChannel:#{params[:library_book_id]}"
  end

  def unsubscribed
    stop_all_streams
  end
end
